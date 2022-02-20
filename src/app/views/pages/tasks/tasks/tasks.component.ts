import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { MatTableDataSource, MatSort } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { TaskCreated, TaskDeleted, TaskStatusUpdated, TaskUpdated } from '../../../../../../src/app/core/auth/_actions/task.actions';
import { TaskDataModel, TaskState } from '../../../../../../src/app/core/auth/_models/task.model';
import { LayoutUtilsService } from '../../../../../../src/app/core/_base/crud';
import { SubheaderService } from '../../../../../../src/app/core/_base/layout';
import { CommonService } from '../../../../../../src/app/views/services/common.service';
import { SharedService } from '../../../../../../src/app/views/services/shared.service';


@Component({
  selector: 'kt-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  public taskForm: FormGroup;
  public searchKeyword = "";
  public index = 1;
  public page = 1;
  public limit = 10;
  public pageSizeOptions: number[] = [5, 10, 25, 100];
  public pageIndex: number = 0;
  public totalData = 0;
  public tasks: TaskDataModel[];
  public task;

  public formTitle = "";
  public isInEditMode: boolean = false;
  public dataSource: MatTableDataSource<TaskDataModel> = new MatTableDataSource();
  public loadingSubject = new BehaviorSubject<boolean>(true);
  public filter: any;
  public showLoader$: Observable<boolean> = of(false);
  public taskListData = [];
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  public displayedColumns: string[] = [
    "srNo",
    "taskName",
    "taskDate",
    "status",
    "action",
  ];
  public taskStatusList: any[] = [
    { id: 1, name: "ACTIVE", value: "Active" },
    { id: 2, name: "DEACTIVE", value: "Deactive" }
  ];



  tasksList: Observable<Array<TaskDataModel>>;

  constructor(
    private subheaderService: SubheaderService,
    public changeDetectorRef: ChangeDetectorRef,
    private layoutUtilsService: LayoutUtilsService,
    public cService: CommonService,
    public sharedservice: SharedService,
    public translate: TranslateService,
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private store: Store<TaskState>,
  ) { }


  ngOnInit() {

    this.subheaderService.setTitle(this.translate.instant('TODO.MAIN_TITLE'))
    this.loadingSubject = new BehaviorSubject<boolean>(true);
    this.getTaskData();

  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }


  getTaskData() {
    this.tasksList = this.store.select(store => store.tasks);
    
    this.tasksList.subscribe((obj) => {
    
      this.taskListData = obj;
      this.loadingSubject = new BehaviorSubject<boolean>(false);
      this.tasks = obj;
      if(this.tasks!=null){
      obj.filter((x) => x.status.name != 'DELETED');
      
      this.totalData = this.tasks.length;
      this.dataSource = new MatTableDataSource(obj);
      this.dataSource.sort = this.sort;
      }
      this.changeDetectorRef.detectChanges();
    })
  };


  initForm() {
    this.taskForm = this.formBuilder.group({
      id: [""],
      // taskName: ["", [Validators.required, Validators.pattern("^[a-zA-Z ]{1,200}$")], this.validateTaskNotTaken.bind(this)],
      // taskName: ["", [Validators.required, Validators.pattern("^[a-zA-Z ]{1,200}$")]],
      taskName: ["", [Validators.required]],
      taskDate: ["", [Validators.required]],
      status: ["", [Validators.required],],
    });
  }

  setValue() {
    this.taskForm.setValue({
      id: this.task.id,
      taskName: this.task.taskName,
      taskDate: new Date(this.task.taskDate),
      status: this.task.status.id,

    });
    this.taskForm.get('id').setValue(this.task.id);
  }

  changeTaskName(event) {
    this.taskForm.get('taskName').setValue(event.target.value.trim())
  }
  applyFilter(filterValue: string) {
    debounceTime(5000);
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }


  resetData() {
    this.tasks = [];
    this.pageIndex = 0;
    this.page = 1;
    this.totalData = 0;
    this.searchKeyword = "";
  }

  onPaginationChange(event) {
    this.showLoader$ = of(true);

    if (event.pageIndex > this.pageIndex) {
      this.pageIndex = event.pageIndex;
      this.page = this.page + 1;
    } else {
      this.pageIndex = event.pageIndex;
      this.page = this.page - 1;
    }
    if (this.limit != event.pageSize) {
      this.limit = event.pageSize;
      this.page = 1;
      this.pageIndex = 0;
    }

    this.getTaskData();

  }


  openModal(content) {
    this.initForm();
    this.isInEditMode = false;

    this.formTitle = this.translate.instant('TODO.ADD_TODO_LABEL');
    this.taskForm.reset();
    this.modalService.open(content);
  }

  updateStatus(id, status) {

    let obj = this.tasks.find((x) => x.id == id);
    obj['status'] = this.taskStatusList.find((x) => x.name == status);
    this.store.dispatch(new TaskStatusUpdated(obj));

    if (status == 'DEACTIVE')
      this.cService.showToast(this.translate.instant('TODO.API_MESSAGES.UPDATE_STATUS_SUCCESS', { message: this.translate.instant('TODO.TODO_LIST.ACTIONS_TOOLTIP.DEACTIVATE') }));
    else
      this.cService.showToast(this.translate.instant('TODO.API_MESSAGES.UPDATE_STATUS_SUCCESS', { message: this.translate.instant('TODO.TODO_LIST.ACTIONS_TOOLTIP.ACTIVATE') }));


  }

  deactiveTask(id, status) {
    const _title = this.translate.instant('TODO.TODO_LIST.CONFIRM_DIALOGS.TODO_DEACTIVE_MODEL_TITLE');
    const _description = this.translate.instant('TODO.TODO_LIST.CONFIRM_DIALOGS.TODO_DEACTIVE_MODEL_DESCRIPTION');
    const _waitDesciption = this.translate.instant('TODO.TODO_LIST.CONFIRM_DIALOGS.TODO_DEACTIVE_MODEL_WAIT_DESCRIPTION');

    const dialogRef = this.layoutUtilsService.confirmElement(
      _title,
      _description,
      _waitDesciption
    );
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.updateStatus(id, status);
      }
    });
  }

  deleteTask(task, status) {

    const _title = this.translate.instant('TODO.TODO_LIST.CONFIRM_DIALOGS.TODO_DELETE_MODEL_TITLE');
    const _description = this.translate.instant('TODO.TODO_LIST.CONFIRM_DIALOGS.TODO_DELETE_MODEL_DESCRIPTION', { taskName: task.taskName });
    const _waitDesciption = this.translate.instant('TODO.TODO_LIST.CONFIRM_DIALOGS.TODO_DELETE_MODEL_WAIT_DESCRIPTION', { taskName: task.taskName });

    const dialogRef = this.layoutUtilsService.deleteElement(
      _title,
      _description,
      _waitDesciption
    );
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {

        this.store.dispatch(new TaskDeleted(task.id));
        this.cService.showToast(this.translate.instant('TODO.API_MESSAGES.DELETE_TODO_SUCCESS'));
      }
    });
  }

  editDetails(taskId, content) {
    this.initForm();
    this.formTitle = this.translate.instant('TODO.UPDATE_TODO_LABEL');
    this.taskForm.reset();
    this.isInEditMode = true;
    this.task = this.tasks.find((x) => x.id == taskId);
    this.setValue();
    this.modalService.open(content);
  }

  submit() {
    if (this.taskForm.valid) {
      if (this.taskListData != null) {
        this.taskListData.sort(function (a, b) {
          return a.id - b.id;
        });
      }

      this.modalService.dismissAll();
      const status = this.taskStatusList.find((x) => x.id == this.taskForm.value.status);

      if (this.isInEditMode) {
        this.taskForm.patchValue({ status: status });
        this.store.dispatch(new TaskUpdated(this.taskForm.value));
        this.cService.showToast(this.translate.instant('TODO.API_MESSAGES.TODO_UPDATED_SUCCESS'));

      } else {

        const id = parseInt(this.taskListData[this.taskListData.length - 1].id)
        this.taskForm.patchValue({ id: id + 1, status: status })
        this.store.dispatch(new TaskCreated(this.taskForm.value));

        this.cService.showToast(this.translate.instant('TODO.API_MESSAGES.TODO_ADDED_SUCCESS'));
      }
      this.taskForm.reset();

      this.modalService.dismissAll();
    } else {
      this.cService.markFormGroupTouched(this.taskForm);

    }
  }

}

