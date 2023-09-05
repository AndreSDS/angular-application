import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
})
export class FiltersComponent implements OnInit, OnDestroy {
  @Output() showCategory = new EventEmitter<string>();
  categooriesSubscription: Subscription | undefined;
  categories: Array<string> | undefined;

  constructor(
    private storeService: StoreService
  ) { }

  ngOnInit(): void {
    this.storeService.getAllCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  onShowCategory(category: string): void {
    this.showCategory.emit(category);
  }

  ngOnDestroy(): void {
    this.categooriesSubscription?.unsubscribe();
  }
}
