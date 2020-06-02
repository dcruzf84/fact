import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
import {MatDialogModule} from '@angular/material/dialog'; 
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
// import {MatTableDataSource} from '@angular/material';

import { 
    MatSliderModule 
} from '@angular/material';

@NgModule({
    imports:[
        MatSliderModule,

        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,

        MatButtonToggleModule,
        MatMenuModule,
        MatInputModule,
        MatCardModule,
        MatSelectModule,
        MatSnackBarModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatExpansionModule,
        MatTableModule,
        MatPaginatorModule      
    ],
    exports: [
    MatSliderModule,
    
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,

    MatButtonToggleModule,
    MatMenuModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatSnackBarModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule
]
})

export class ModulMaterial {}