import { NgModule } from "@angular/core";
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material/chips';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
    exports: [
        MatSelectModule,
        MatFormFieldModule,
        MatChipsModule,
        MatInputModule,
        MatDatepickerModule,
        MatButtonModule,
        MatNativeDateModule
    ]
})
export class MaterialModule{}