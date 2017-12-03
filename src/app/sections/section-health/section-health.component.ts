import { Component, OnInit } from '@angular/core';

import { Server } from '../../shared/server.model';

const SAMPLE_SERVERS: Server[] = [
  { id: 1, name: 'dev-web', isOnline: false },
  { id: 2, name: 'dev-mail', isOnline: false },
  { id: 3, name: 'prod-web', isOnline: true },
  { id: 4, name: 'prod-web', isOnline: true }
];

@Component({
  selector: 'app-section-health',
  templateUrl: './section-health.component.html',
  styleUrls: ['./section-health.component.css']
})
export class SectionHealthComponent implements OnInit {

  servers: Server[] = SAMPLE_SERVERS;

  constructor() { }
  
  ngOnInit() {
  }
  
}
