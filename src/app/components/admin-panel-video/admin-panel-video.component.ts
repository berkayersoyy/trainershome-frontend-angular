import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminPanelVideoAddVideoModalComponent } from '../admin-panel-video-add-video-modal/admin-panel-video-add-video-modal.component';

@Component({
  selector: 'app-admin-panel-video',
  templateUrl: './admin-panel-video.component.html',
  styleUrls: ['./admin-panel-video.component.css'],
})
export class AdminPanelVideoComponent implements OnInit {
  constructor(
    private modalService: NgbModal,
  ) {}

  ngOnInit(): void {}


}
