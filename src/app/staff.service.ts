import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { defineBase } from '@angular/core/src/render3';

const staffFBCollection: string = 'Staffs';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  staffModules: Observable<StaffModel[]>;

  constructor(private db: AngularFirestore) {
    this.staffModules = db.collection(staffFBCollection).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as StaffModel;
        const ID = a.payload.doc.id;
        return { ID, ...data };
      }))
    );
  }

  public getStaffModels(): Observable<StaffModel[]> {
    return this.staffModules;
  }

  public addStaffModel(staffModel: StaffModel) {
    this.db.collection(staffFBCollection).add({
      Address: staffModel.Address,
        Credit: staffModel.Credit,
        Name: staffModel.Name,
        Note: staffModel.Note,
        Phone: staffModel.Phone
    })
      .then(function (docRef) {
        console.log("Staffs Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Staffs Error adding document: ", error);
      });
  }

  public deleteStaffModel( staffModel: StaffModel) {
    this.db.collection(staffFBCollection).doc(staffModel.ID).delete().then(function() {
      console.log("Document successfully deleted!");
  }).catch(function(error) {
      console.error("Error removing document: ", error);
  });
  }
}

export interface StaffModel {
  ID: string;
  Address: string;
  Credit: Number;
  Name: string;
  Phone: string;
  Note: string;
}