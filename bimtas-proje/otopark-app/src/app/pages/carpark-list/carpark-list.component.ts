import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { MatDialog } from '@angular/material/dialog';
import { CarparkDetailsModalComponent } from 'src/app/shared/modals/carpark-details-modal/carpark-details-modal.component';
@Component({
  selector: 'app-carpark-list',
  templateUrl: './carpark-list.component.html',
  styleUrls: ['./carpark-list.component.scss'],
})
export class CarparkListComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  private apiUrl =
    'https://data.ibb.gov.tr/api/3/action/datastore_search?resource_id=6e7ed7c8-c758-495a-a7f7-5c806e8e9679&limit=5';
  private headers = {
    resource_id: '6e7ed7c8-c758-495a-a7f7-5c806e8e9679',
    limit: 5,
    q: 'jones',
  };
  modalRef: any;

  carParkData = [
    {
      id: 1,
      kurumAdi: 'İBB / İSPARK A.Ş.',
      otoparkTuru: 'Yol Üzeri',
      otoparkSayisi: 308,
      kapasite: 18649,
      details: {
        id: 1,
        parkName: 'Vali Konağı Caddesi 1',
        locationName: 'Şişli Vali Konağı Caddes',
        parkTypeId: 'YOL ÜSTÜ',
        parkTypeDesc: 'YOL ÜSTÜ',
        capacity: 30,
        workingTime: '08:00-19:00',
        countryName: 'ŞİŞLİ',
        longitude: 28.9879749441319,
        latitude: 41.0488233569155,
      },
    },
    {
      id: 2,
      kurumAdi: 'İBB / İSPARK A.Ş.',
      otoparkTuru: 'Açık',
      otoparkSayisi: 335,
      kapasite: 60057,
      details: {
        id: 2,
        parkName: 'Şakayık Sokak 1',
        locationName: 'Şişli Şakayık Soka',
        parkTypeId: 'YOL ÜSTÜ',
        parkTypeDesc: 'YOL ÜSTÜ',
        capacity: 50,
        workingTime: '08:00-19:00',
        countryName: 'ŞİŞLİ',
        longitude: 28.9955656052444,
        latitude: 41.0495232987717,
      },
    },
    {
      id: 3,
      kurumAdi: 'İBB / İSPARK A.Ş.',
      otoparkTuru: 'Kapalı',
      otoparkSayisi: 82,
      kapasite: 37621,
      details: {
        id: 3,
        parkName: 'Hüsrev Gerede Sokak 1',
        locationName: 'Şişli Hüsrev Gerede Caddes',
        parkTypeId: 'YOL ÜSTÜ',
        parkTypeDesc: 'YOL ÜSTÜ',
        capacity: 50,
        workingTime: '08:00-19:00',
        countryName: 'ŞİŞLİ',
        longitude: 28.99497557817,
        latitude: 41.0483895406422,
      },
    },
    {
      id: 4,
      kurumAdi: 'Özel',
      otoparkTuru: 'Açık',
      otoparkSayisi: 1720,
      kapasite: 109480,
      details: {
        id: 4,
        parkName: 'Sezai Selek Sokak 1',
        locationName: 'Seza-i Selek Caddes',
        parkTypeId: 'YOL ÜSTÜ',
        parkTypeDesc: 'YOL ÜSTÜ',
        capacity: 50,
        workingTime: '08:00-19:00',
        countryName: 'ŞİŞLİ',
        longitude: 28.9959741661449,
        latitude: 41.0533861999073,
      },
    },
    {
      id: 5,
      kurumAdi: 'Özel',
      otoparkTuru: 'Kapalı',
      otoparkSayisi: 451,
      kapasite: 43912,
      details: {
        id: 5,
        parkName: 'Maçka Caddesi 1',
        locationName: 'Şişli Maçka Caddes',
        parkTypeId: 'YOL ÜSTÜ',
        parkTypeDesc: 'YOL ÜSTÜ',
        capacity: 40,
        workingTime: '08:00-00:00',
        countryName: 'ŞİŞLİ',
        longitude: 28.9929548331432,
        latitude: 41.0466296925246,
      },
    },
  ];


  details:any 

  ngOnInit(): void {
    // this.getCarParkData()
    //response 503 dönüyor
  }
  getCarParkData() {
    axios
      .get(this.apiUrl, { headers: this.headers })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  openModal(details: any) {
    this.details = details
    console.log(this.details)
    this.modalRef = this.dialog.open(CarparkDetailsModalComponent, {
      width: '570px',
      height: '400px',
      data: {
       details : this.details
      },
    });
  }
}


  // carParkDetailData = [
  //   {
  //     id: 1,
  //     parkName: 'Vali Konağı Caddesi 1',
  //     locationName: 'Şişli Vali Konağı Caddes',
  //     parkTypeId: 'YOL ÜSTÜ',
  //     parkTypeDesc: 'YOL ÜSTÜ',
  //     capacity: 30,
  //     workingTime: '08:00-19:00',
  //     countryName: 'ŞİŞLİ',
  //     longitude: 28.9879749441319,
  //     latitude: 41.0488233569155,
  //   },
  //   {
  //     id: 2,
  //     parkName: 'Şakayık Sokak 1',
  //     locationName: 'Şişli Şakayık Soka',
  //     parkTypeId: 'YOL ÜSTÜ',
  //     parkTypeDesc: 'YOL ÜSTÜ',
  //     capacity: 50,
  //     workingTime: '08:00-19:00',
  //     countryName: 'ŞİŞLİ',
  //     longitude: 28.9955656052444,
  //     latitude: 41.0495232987717,
  //   },
  //   {
  //     id: 3,
  //     parkName: 'Hüsrev Gerede Sokak 1',
  //     locationName: 'Şişli Hüsrev Gerede Caddes',
  //     parkTypeId: 'YOL ÜSTÜ',
  //     parkTypeDesc: 'YOL ÜSTÜ',
  //     capacity: 50,
  //     workingTime: '08:00-19:00',
  //     countryName: 'ŞİŞLİ',
  //     longitude: 28.99497557817,
  //     latitude: 41.0483895406422,
  //   },
  //   {
  //     id: 4,
  //     parkName: 'Sezai Selek Sokak 1',
  //     locationName: 'Seza-i Selek Caddes',
  //     parkTypeId: 'YOL ÜSTÜ',
  //     parkTypeDesc: 'YOL ÜSTÜ',
  //     capacity: 50,
  //     workingTime: '08:00-19:00',
  //     countryName: 'ŞİŞLİ',
  //     longitude: 28.9959741661449,
  //     latitude: 41.0533861999073,
  //   },
  //   {
  //     id: 5,
  //     parkName: 'Maçka Caddesi 1',
  //     locationName: 'Şişli Maçka Caddes',
  //     parkTypeId: 'YOL ÜSTÜ',
  //     parkTypeDesc: 'YOL ÜSTÜ',
  //     capacity: 40,
  //     workingTime: '08:00-00:00',
  //     countryName: 'ŞİŞLİ',
  //     longitude: 28.9929548331432,
  //     latitude: 41.0466296925246,
  //   },
  // ];