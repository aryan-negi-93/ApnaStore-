import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
    exports: [
        MatInputModule,
        MatSelectModule,
        MatCardModule,
        MatCheckboxModule,
        MatRadioModule,
        MatTableModule,
        MatDialogModule,
        MatSortModule,
        MatPaginatorModule,
        MatButtonModule,
        MatFormFieldModule,
        MatProgressSpinnerModule
    ]
})

export class MaterialModule {

}
