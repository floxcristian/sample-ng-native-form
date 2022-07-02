import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('imedFormEl') imedFormElement!: ElementRef;

  actionLink: string;
  imedForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.actionLink = 'https://interfaz4pre.bonoelectronico.cl/login.php';
    this.imedForm = this.fb.group({
      NroTransac: '',
      NroAuditoria: '',
    });
  }

  executeForm(): void {
    this.imedFormElement.nativeElement.submit();
  }
}
