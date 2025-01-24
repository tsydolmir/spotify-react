import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyAuthService } from '../../services/spotify-auth.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {
  constructor(
    private router: Router,
    private spotifyAuth: SpotifyAuthService
  ) { }

  ngOnInit() {
    this.spotifyAuth.handleCallback()
      .then(() => {
        this.router.navigate(['/']); // Redireciona para a página inicial
      })
      .catch((err: Error) => {
        console.error('Erro ao processar o callback do Spotify:', err.message);
        this.router.navigate(['/error']); // Redireciona para uma página de erro, se necessário
      });
  }


}
