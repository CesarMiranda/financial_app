import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movements',
  templateUrl: './movements.page.html',
  styleUrls: ['./movements.page.scss'],
})
export class MovementsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoPage() {
    this.router.navigateByUrl('/movements/new-movement');
  }

  detailMovement(id: number) {
    this.router.navigateByUrl(`/movements/detail/${id}`);
  }

}
