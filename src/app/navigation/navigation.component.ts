import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
@Component({
        selector: 'app-navigation',
        templateUrl: './navigation.component.html',
        styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

        constructor(public router: Router, public dataS: DataService) { }

        ngOnInit(): void {}

        logout() {
                this.dataS.removeLocal();
                this.router.navigate(['/landing']);
        }
}
