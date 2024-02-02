import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { User } from '../../models/user.class';
import { CommonModule } from '@angular/common';
import {
  Firestore,
  collection,
  collectionData,
  setDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { doc } from 'firebase/firestore';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-dialog-user',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDatepickerModule,
    CommonModule,
    MatProgressBarModule,
    MatSelectModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './dialog-user.component.html',
  styleUrl: './dialog-user.component.scss',
})
export class DialogUserComponent {
  user = new User();
  birthDate!: Date;
  firestore: Firestore = inject(Firestore);
  items$: Observable<any[]>;
  loading = false;
  clubs: any;

  constructor(
    public dialogRef: MatDialogRef<DialogUserComponent>
  ) {
    const aCollection = collection(this.firestore, 'Users');
    this.items$ = collectionData(aCollection);
  }

  ngOnInit() {
    
  }

  async saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    this.user.id = Date.now().toString();
    this.loading = true;
    await setDoc(
      doc(this.firestore, 'Users', this.user.id),
      this.user.asJSON()
    );
    this.loading = false;
    this.dialogRef.close();
    window.location.href = 'user';
  }

  
}
