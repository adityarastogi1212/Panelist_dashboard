import { Component, OnInit } from '@angular/core';
import { Panel } from '../panel';
import { PanelService } from '../panel.service';

@Component({
  selector: 'app-panel-list',
  templateUrl: './panel-list.component.html',
  styleUrls: ['./panel-list.component.css']
})
export class PanelListComponent implements OnInit {

  panels!: Panel[];

  constructor( private panelService: PanelService) { }

  ngOnInit(): void {
    this.panelService.getPanelsList().subscribe(data=> this.panels = data);



    // this.getCandidates();
    this.panels=[{
      "id":10712056,
      "name":"Aditya Kumar",
      "grade":"L1",
      "email":"akumar@gmail.com" 
    },
    {
      "id":10712036,
      "name":"Kishore Kumar",
      "grade":"L2",
      "email":"kkumar@gmail.com" 
    },
    {
      "id":10715004,
      "name":"Saurabh Kumar",
      "grade":"L1",
      "email":"skumar@gmail.com"
    },
    {
      "id":10702004,
      "name":"Abhishek Kumar",
      "grade":"L1",
      "email":"abkumar@gmail.com"
    },
    {
      "id":10710030,
      "name":"Harsh Kumar",
      "grade":"L2",
      "email":"hkumar@gmail.com"
    }
  ]
  }

  // checkAllCheckBox(ev: any) {
	// 	this.panels.forEach(x => x.checked = ev.target.checked)
	// }

	// isAllCheckBoxChecked() {
	// 	return this.panels.every(p => p.checked);
	// }

  // private getCandidates(){
  //   this.candidateService.getCandidatesList().subscribe(data =>{
  //     this.candidates=data;
  //   })
  // }

}
