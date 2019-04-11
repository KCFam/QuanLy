import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const staffFBCollection: string = 'Staffs';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  staffModules: Observable<StaffModel[]>;

  constructor( db: AngularFirestore ) { 
    this.staffModules = db.collection(staffFBCollection).snapshotChanges().pipe(
      map(actions => actions.map(a=> {
        const data = a.payload.doc.data() as StaffModel;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  public getStaffModels() : Observable<StaffModel[]> {
    return this.staffModules;
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