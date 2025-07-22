import { Component,  output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Search } from 'lucide-angular';

@Component({
  selector: 'app-search-and-filter',
  standalone: true,
  imports: [FormsModule, LucideAngularModule],
  templateUrl: './search-and-filter.component.html',
  styleUrl: './search-and-filter.component.css'
})
export class SearchAndFilterComponent {
  readonly Search = Search;
  onSearch = output<string>();
  onFilter = output<string>();
  
  category:string = 'All';
  searchTerm : string = '';


  SearchProduct(event: Event){
     event.preventDefault();
     
    if(!this.searchTerm.trim()){
       this.onFilter.emit('All');
    } 
    this.onSearch.emit(this.searchTerm);
  }

  filterProducts(event: Event){
    this.onFilter.emit(this.category);
  }
}
