import React from 'react';
import { Coffee, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="h-6 w-6 text-amber-600" />
              <span className="text-xl font-bold text-white">Un café, un sucre</span>
            </div>
            <p className="text-sm">
              Votre destination café premium au Cégep de Jonquière, offrant une expérience unique avec les meilleurs grains du monde.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-amber-600" />
                <a href="mailto:oli.f.barbin@gmail.com" className="hover:text-amber-600">
                  oli.f.barbin@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-amber-600" />
                <a href="tel:+15816683125" className="hover:text-amber-600">
                  +1 (581) 668-3125
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-amber-600" />
                <span>2505 Rue Saint-Hubert, Jonquière, QC G7X 7W2</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Horaires</h3>
            <ul className="space-y-2">
              <li>Lundi - Vendredi: 7h - 20h</li>
              <li>Samedi: 8h - 21h</li>
              <li>Dimanche: 9h - 18h</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Suivez-nous</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-amber-600">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-amber-600">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-amber-600">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Un café, un sucre. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}