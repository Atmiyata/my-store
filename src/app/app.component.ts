import { fromEvent } from 'rxjs';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterModule, RouterOutlet } from '@angular/router';
import { signal, Component, AfterViewInit } from '@angular/core';

import { HeaderComponent } from './components/header';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, RouterOutlet, RouterModule, HeaderComponent],
})
export class AppComponent implements AfterViewInit {
  title = 'my-store';

  obs$ = fromEvent(window, 'scroll').pipe(takeUntilDestroyed());
  scrolled = signal(false, { equal: (a, b) => a === b });

  ngAfterViewInit(): void {
    this.obs$.subscribe((event: any) => {
      const scrollPosition: number =
        (event.target as Document).scrollingElement?.scrollTop ?? 0;
      this.scrolled.set(scrollPosition > 90);
    });
  }
}
