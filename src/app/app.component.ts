import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { SearchDeleteComponent } from './search-delete/search-delete.component';
import { EmployeecrudService } from './employeecrud.service';
import { SearchComponent } from './search/search.component';
import { UpdateComponent } from './update/update.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule,FormsModule,RouterLink,RegisterComponent,SearchDeleteComponent,SearchComponent,UpdateComponent],
  providers:[EmployeecrudService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EmpCRUD';
}
