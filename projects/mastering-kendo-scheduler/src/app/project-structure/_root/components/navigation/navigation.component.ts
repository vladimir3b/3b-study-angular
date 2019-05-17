import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { TEMPLATES_ROUTES } from '../../../templates/templates.router';

@Component({
  selector: 'fg-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  navigationLink = [
    ...TEMPLATES_ROUTES
  ];

  constructor(private _router: Router) { }

  navigate(baseLink: string, subLink: string): void {
    // console.log(`/${baseLink}/${ subLink }`);
    this._router.navigateByUrl(`/${baseLink}/${subLink}`);
  }
}
