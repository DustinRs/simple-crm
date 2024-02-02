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
  addDoc,
  collection,
  collectionData,
  doc,
  updateDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-edit-user-dialog',
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
  templateUrl: './edit-user-dialog.component.html',
  styleUrl: './edit-user-dialog.component.scss',
})
export class EditUserDialogComponent {

  loading = false;
  user!: User;
  birthDate!: Date;
  firestore: Firestore = inject(Firestore);
  items$: Observable<any[]>;
  userId!: string | any;

  constructor(
    public dialogRef: MatDialogRef<EditUserDialogComponent>
  ) {
    const aCollection = collection(this.firestore, 'Users');
    this.items$ = collectionData(aCollection);
  }

  ngOnInit() {
  
  }

  async saveUser() {
    this.loading = true;
    const editedUser = doc(collection(this.firestore, 'Users'), this.userId);
    await updateDoc(editedUser, {
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
      birthDate: this.birthDate,
      phone: this.user.phone,
    });

    this.loading = false;
    this.dialogRef.close();
    window.location.href = 'user/' + this.userId;
  }

  
}
