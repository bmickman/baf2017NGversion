import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';



@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})


export class ArtistsComponent implements OnInit {



   artists = [
  {
    "name": "Adele Maxwell",
    "address": "16 Cypress Ave",
    "pic": "./assets/art/baf.jpg"
  },
  {
    "name": "Blair Spieler",
    "address": "16 Cypress Ave",
    "pic": "./assets/art/blair.jpg"
  },
  {
    "name": "Blake Miller",
    "address": "16 Cypress Ave",
    "pic": "./assets/art/baf.jpg"
  },
  {
    "name": "Eva Genevieve",
    "address": "16 Cypress Ave",
    "pic": "./assets/art/eva.jpg"
  },
  {
    "name": "Zannah Noe",
    "address": "16 Cypress Ave",
    "pic": "./assets/art/noe.jpg"
  },
  {
    "name": "Abraham Ushina",
    "address": "1717 Troutman St",
    "pic": "./assets/art/abraham.jpg"
  },
  {
    "name": "Emilio Martinez Poppe",
    "address": "1717 Troutman St",
    "pic": "./assets/art/325.jpg"
  },
  {
    "name": "Javier Barrera",
    "address": "1717 Troutman St",
    "pic": "./assets/art/baf.jpg"
  },
  {
    "name": "Lika Volkova",
    "address": "1717 Troutman St",
    "pic": "./assets/art/325.jpg"
  },
  {
    "name": "Maria Kofman",
    "address": "1717 Troutman St",
    "pic": "./assets/art/325.jpg"
  },
  {
    "name": "Ray Cross",
    "address": "1717 Troutman St",
    "pic": "./assets/art/cross.jpg"
  },
  {
    "name": "Uta Brauser",
    "address": "Wyckoff Ave and Jefferson St",
    "pic": "./assets/art/baf.jpg"
  },
  {
    "name": "Kirsten Bowen",
    "address": "Wyckoff Ave and Jefferson St",
    "pic": "./assets/art/bowen.jpg"
  },
  {
    "name": "Espartaco Albornoz Abreu",
    "address": "44 Stewart St",
    "pic": "./assets/art/abreu.jpg"
  },
  {
    "name": "Isabelle Ewing",
    "address": "44 Stewart St",
    "pic": "./assets/art/isabel.jpg"
  },
  {
    "name": "Kakeru Asai",
    "address": "44 Stewart St",
    "pic": "./assets/art/baf.jpg"
  },
  {
    "name": "Ogulcan Kush",
    "address": "44 Stewart St",
    "pic": "./assets/art/kush.jpg"
  },
  {
    "name": "Sonomi Kobayashi",
    "address": "44 Stewart St",
    "pic": "./assets/art/sonomi.jpg"
  },
  {
    "name": "Mike Roth",
    "address": "75 Stewart Ave",
    "pic": "./assets/art/baf.jpg"
  },
  {
    "name": "Birgit Buchart",
    "address": "75 Stewart Ave",
    "pic": "./assets/art/buchart.jpg"
  },
  {
    "name": "Mirella Cardoso",
    "address": "75 Stewart Ave",
    "pic": "./assets/art/mirella.jpg"
  },
  {
    "name": "Ryan Toth",
    "address": "513 Johnson Ave",
    "pic": "./assets/art/toth.jpg"
  },
  {
    "name": "Michael Alan",
    "address": "566 Johnson Ave",
    "pic": "./assets/art/baf.jpg"
  },
  {
    "name": "Natalie Baxter",
    "address": "28 Varick Ave",
    "pic": "./assets/art/baxter.jpg"
  },
  {
    "name": "Halaburda",
    "address": "56 bogart st",
    "pic": "./assets/art/halaburda.jpg"
  },
  {
    "name": "Teresa Kudarauskas",
    "address": "56 bogart st",
    "pic": "./assets/art/teresa.jpg"
  },
  {
    "name": "Joe Bochynski",
    "address": "56 bogart st",
    "pic": "./assets/art/bochynski.jpg"
  },
  {
    "name": "Dexter Ciprian",
    "address": "56 bogart st",
    "pic": "./assets/art/ciprian.jpg"
  },
  {
    "name": "Vita Eruhimovitz",
    "address": "56 bogart st",
    "pic": "./assets/art/vita.jpg"
  },
  {
    "name": "Jack Henry",
    "address": "56 bogart st",
    "pic": "./assets/art/jack.jpg"
  },
  {
    "name": "Everett Kane",
    "address": "56 bogart st",
    "pic": "./assets/art/kane.jpg"
  },
  {
    "name": "Julian Montague",
    "address": "56 bogart st",
    "pic": "./assets/art/montague.jpg"
  },
  {
    "name": "Paul Catalanotto",
    "address": "56 bogart st",
    "pic": "./assets/art/paul.jpg"
  },
  {
    "name": "Camille Eskell",
    "address": "229 Cook St",
    "pic": "./assets/art/eskell.png"
  },
  {
    "name": "Charles Geiger",
    "address": "229 Cook St",
    "pic": "./assets/art/geiger.jpg"
  },
  {
    "name": "Loren Eiferman",
    "address": "229 Cook St",
    "pic": "./assets/art/loren.jpg"
  },
  {
    "name": "@anti_renaissance",
    "address": "383 Bushwick Ave",
    "pic": "./assets/art/head.jpg"
  },
  {
    "name": "@bllaiirr",
    "address": "383 Bushwick Ave",
    "pic": "./assets/art/head.jpg"
  },
  {
    "name": "@chud_3",
    "address": "383 Bushwick Ave",
    "pic": "./assets/art/head.jpg"
  },
  {
    "name": "@clockworkcros",
    "address": "383 Bushwick Ave",
    "pic": "./assets/art/head.jpg"
  },
  {
    "name": "@french.brain",
    "address": "383 Bushwick Ave",
    "pic": "./assets/art/head.jpg"
  },
  {
    "name": "@h33m_inc",
    "address": "383 Bushwick Ave",
    "pic": "./assets/art/head.jpg"
  },
  {
    "name": "@macivelli",
    "address": "383 Bushwick Ave",
    "pic": "./assets/art/head.jpg"
  },
  {
    "name": "Christopher Johnson",
    "address": "383 Bushwick Ave",
    "pic": "./assets/art/head.jpg"
  },
  {
    "name": "Kieva Campbell",
    "address": "383 Bushwick Ave",
    "pic": "./assets/art/head.jpg"
  },
  {
    "name": "Kristin Texeira",
    "address": "5 Central Ave",
    "pic": "./assets/art/brilliant.jpg"
  },
  {
    "name": "Nikita Vishnevskiy",
    "address": "5 Central Ave",
    "pic": "./assets/art/brilliant.jpg"
  },
  {
    "name": "Phyllis Boudreaux",
    "address": "5 Central Ave",
    "pic": "./assets/art/brilliant.jpg"
  },
  {
    "name": "Sasha Charoensub",
    "address": "60 Jefferson St",
    "pic": "./assets/art/sasha.jpg"
  },
  {
    "name": "Cadence Hooks",
    "address": "60 Jefferson St",
    "pic": "./assets/art/cadence.jpg"
  },
  {
    "name": "Annika Moller",
    "address": "60 Jefferson St",
    "pic": "./assets/art/annika.jpg"
  },
  {
    "name": "Sienna Berritto",
    "address": "60 Jefferson St",
    "pic": "./assets/art/jefferson.jpg"
  },
  {
    "name": "Andrew Raphael",
    "address": "60 Jefferson St",
    "pic": "./assets/art/jefferson.jpg"
  },
  {
    "name": "Reem Abdou",
    "address": "60 Jefferson St",
    "pic": "./assets/art/jefferson.jpg"
  },
  {
    "name": "Diana Meaker",
    "address": "60 Jefferson St",
    "pic": "./assets/art/jefferson.jpg"
  },
  {
    "name": "Ryan Ginsburg",
    "address": "60 Jefferson St",
    "pic": "./assets/art/jefferson.jpg"
  },
  {
    "name": "Chloe Louise Smith",
    "address": "60 Jefferson St",
    "pic": "./assets/art/jefferson.jpg"
  },
  {
    "name": "Alex Colby",
    "address": "60 Jefferson St",
    "pic": "./assets/art/jefferson.jpg"
  },
  {
    "name": "Carlos Jaramillo",
    "address": "37 Troutman St",
    "pic": "./assets/art/carlos.jpg"
  },
  {
    "name": "Tamara Santibañez",
    "address": "37 Troutman St",
    "pic": "./assets/art/tamara.jpg"
  },
  {
    "name": "Annique Delphine",
    "address": "1263 Bushwick Ave",
    "pic": "./assets/art/paradise.jpg"
  },
  {
    "name": "Camille Hoffman",
    "address": "1263 Bushwick Ave",
    "pic": "./assets/art/paradise.jpg"
  },
  {
    "name": "Joani Tremblay",
    "address": "1263 Bushwick Ave",
    "pic": "./assets/art/paradise.jpg"
  },
  {
    "name": "Kat Ryals",
    "address": "1263 Bushwick Ave",
    "pic": "./assets/art/paradise.jpg"
  },
  {
    "name": "Margaret Murphy",
    "address": "1263 Bushwick Ave",
    "pic": "./assets/art/paradise.jpg"
  },
  {
    "name": "Netta Läufer",
    "address": "1263 Bushwick Ave",
    "pic": "./assets/art/paradise.jpg"
  },
  {
    "name": "Hannah Stahl",
    "address": "10-80 Wycoff Ave",
    "pic": "./assets/art/hannah.jpg"
  },
  {
    "name": "Brandon Mickman",
    "address": "1635 Putnam Ave",
    "pic": "./assets/art/brandon.jpg"
  },
  {
    "name": "Christine Stoddard",
    "address": "1635 Putnam Ave",
    "pic": "./assets/art/baf.jpg"
  },
  {
    "name": "Alex Checa",
    "address": "1635 Putnam Ave",
    "pic": "./assets/art/checa.jpg"
  },
  {
    "name": "Jackie Mock",
    "address": "853 Onderdonk Ave",
    "pic": "./assets/art/mock.jpg"
  },
  {
    "name": "Astrobelle",
    "address": "41 Belvidere St",
    "pic": "./assets/art/baf.jpg"
  },
  {
    "name": "Kelvin Daly",
    "address": "41 Belvidere St",
    "pic": "./assets/art/baf.jpg"
  },
  {
    "name": "Mark Robert Nilsen",
    "address": "41 Belvidere St",
    "pic": "./assets/art/baf.jpg"
  },
  {
    "name": "Masha Gitin",
    "address": "41 Belvidere St",
    "pic": "./assets/art/baf.jpg"
  },
  {
    "name": "Hisayasu Takashio",
    "address": "41 Belvidere St",
    "pic": "./assets/art/baf.jpg"
  },
  {
    "name": "Jason Blackkat",
    "address": "41 Belvidere St",
    "pic": "./assets/art/baf.jpg"
  },
  {
    "name": "LinearElectricDisturbance",
    "address": "41 Belvidere St",
    "pic": "./assets/art/baf.jpg"
  },
  {
    "name": "Plan 23",
    "address": "41 Belvidere St",
    "pic": "./assets/art/baf.jpg"
  },
  {
    "name": "Project Kandata",
    "address": "41 Belvidere St",
    "pic": "./assets/art/baf.jpg"
  },
  {
    "name": "TrancePopLoops",
    "address": "41 Belvidere St",
    "pic": "./assets/art/baf.jpg"
  }
];

  constructor() { }

  ngOnInit() {
  }

}
