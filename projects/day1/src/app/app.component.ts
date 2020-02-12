import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <!--<div
                [class.demo1]="demo1"
                [class.demo2]="demo2"
                [class.demo3]="demo3">-->
        <div [ngClass]="devClasses" 
             [ngStyle]="{
                border : count +'px solid green',
                backgroundColor: 'blue'
             }" 
             [style.border]="count +'px solid green'">

            <h1 [id]="title.length + 5" (click)="toggle('demo1',$event)">
                Day1 Nice value: {{title}}
            </h1>
            <button (click)="toggle('demo1')">demo1</button>
            <button (click)="toggle('demo2')">demo2</button>
            <button (click)="toggle('demo3')">demo3</button>
        </div>
        <div>
            <h1> Counter demo</h1>
            <nice-counter
                    (xxxChange) = "title = $event.toString()"
                    [max]  = "110"
                    [min]  = "97"
                    [step] = "3"
                    [value]= "100">                
            </nice-counter>
        </div>
        <div>
            <h3>*ngFor</h3>
            
            <nice-user 
                *ngFor="let user of users;index as i;last as l"
                [source]="user"
                [userNo]="i"
            ></nice-user>
            <!--<div *ngFor="let user of users;index as i;last as l">
                <img [src]="user.picture.thumbnail">
                <span>{{i}} - {{user.name.first}} {{user.name.last}}</span>
            </div>-->
            
        </div>
        <div>
            <nice-game></nice-game>
        </div>
    `,
    styles: [`
        .demo1 {
            background-color: yellow;
        }

        .demo2 {
            border: 2px solid red;
        }

        .demo3 {
            background-color: darkgray;
        }
    `]
})
export class AppComponent {
    title = 'day1';
    count = 0;
    _classes = {
      'demo1' : true,
      'demo2' : true,
      'demo3' : true,
    };
    demo1Val = true;
    demo2Val = true;
    demo3Val = true;

    users = [
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Levi",
                "last": "Matthews"
            },
            "location": {
                "street": {
                    "number": 4418,
                    "name": "Karen Dr"
                },
                "city": "South Bend",
                "state": "South Carolina",
                "country": "United States",
                "postcode": 18881,
                "coordinates": {
                    "latitude": "89.0980",
                    "longitude": "-137.9020"
                },
                "timezone": {
                    "offset": "+5:30",
                    "description": "Bombay, Calcutta, Madras, New Delhi"
                }
            },
            "email": "levi.matthews@example.com",
            "login": {
                "uuid": "98b76dc1-c3c6-4748-955f-ca632483cc9f",
                "username": "goldenwolf787",
                "password": "eldorado",
                "salt": "XoYADpHK",
                "md5": "00f012a4f4f68b02dc44f1a47f9c2a3b",
                "sha1": "a13a708f2fcbde45fef4bc1ad6e803254cc70fa9",
                "sha256": "fe00c6c368907e4fa86f1a508c828bf68508df0229e31e0555606d1e3850b18e"
            },
            "dob": {
                "date": "1980-03-27T01:48:55.114Z",
                "age": 40
            },
            "registered": {
                "date": "2009-02-02T10:27:11.206Z",
                "age": 11
            },
            "phone": "(125)-277-5966",
            "cell": "(077)-477-4871",
            "id": {
                "name": "SSN",
                "value": "007-83-1895"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/21.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/21.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/21.jpg"
            },
            "nat": "US"
        },
        {
            "gender": "female",
            "name": {
                "title": "Ms",
                "first": "Joanna",
                "last": "Natås"
            },
            "location": {
                "street": {
                    "number": 6612,
                    "name": "Nordahl Bruns gate"
                },
                "city": "Lofthus",
                "state": "Hordaland",
                "country": "Norway",
                "postcode": "5302",
                "coordinates": {
                    "latitude": "34.8094",
                    "longitude": "41.1701"
                },
                "timezone": {
                    "offset": "-4:00",
                    "description": "Atlantic Time (Canada), Caracas, La Paz"
                }
            },
            "email": "joanna.natas@example.com",
            "login": {
                "uuid": "0cc6cb7d-c210-4ce5-aef8-cf79e4a97571",
                "username": "silverbird813",
                "password": "dannyboy",
                "salt": "hQKeAsjA",
                "md5": "c8b8d04294a0c6abae0d0a4bfd7cc675",
                "sha1": "5e5437fd23ee429f11f74c34788cfc16e31c4c53",
                "sha256": "9164426f7bdec6b8649e5d5e363cb8a9ef76cf0e11ca6d3e28aadf782ee64e53"
            },
            "dob": {
                "date": "1950-01-08T15:41:16.432Z",
                "age": 70
            },
            "registered": {
                "date": "2002-05-25T00:53:30.550Z",
                "age": 18
            },
            "phone": "73833235",
            "cell": "48176096",
            "id": {
                "name": "FN",
                "value": "08015005425"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/20.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/20.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/20.jpg"
            },
            "nat": "NO"
        },
        {
            "gender": "female",
            "name": {
                "title": "Miss",
                "first": "Tracey",
                "last": "Cook"
            },
            "location": {
                "street": {
                    "number": 3969,
                    "name": "Ormond Quay"
                },
                "city": "Kinsealy-Drinan",
                "state": "Donegal",
                "country": "Ireland",
                "postcode": 12959,
                "coordinates": {
                    "latitude": "34.0766",
                    "longitude": "33.0330"
                },
                "timezone": {
                    "offset": "-3:00",
                    "description": "Brazil, Buenos Aires, Georgetown"
                }
            },
            "email": "tracey.cook@example.com",
            "login": {
                "uuid": "164264b0-c103-4a5d-a545-94c3ba0f9ce9",
                "username": "browncat132",
                "password": "clint",
                "salt": "mtWcBJWY",
                "md5": "c2e29246b4c8b53f5606d9d7a7dc9e1f",
                "sha1": "db79113de2d00b89f91efa0c1735639b0b12485a",
                "sha256": "ef2deb6ec4702751f8101f69cb6232c3e49d03cd66d3717fa3627da2bc6ef8b7"
            },
            "dob": {
                "date": "1958-09-14T17:04:47.285Z",
                "age": 62
            },
            "registered": {
                "date": "2007-04-05T18:22:29.899Z",
                "age": 13
            },
            "phone": "041-301-9864",
            "cell": "081-348-7113",
            "id": {
                "name": "PPS",
                "value": "2844406T"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/75.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/75.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/75.jpg"
            },
            "nat": "IE"
        },
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Tim",
                "last": "Jordan"
            },
            "location": {
                "street": {
                    "number": 9959,
                    "name": "Nowlin Rd"
                },
                "city": "Houston",
                "state": "Arizona",
                "country": "United States",
                "postcode": 18119,
                "coordinates": {
                    "latitude": "21.1442",
                    "longitude": "80.7257"
                },
                "timezone": {
                    "offset": "-1:00",
                    "description": "Azores, Cape Verde Islands"
                }
            },
            "email": "tim.jordan@example.com",
            "login": {
                "uuid": "f2056982-035c-4079-8d34-2044c6613ed9",
                "username": "whiteladybug564",
                "password": "kitten",
                "salt": "lzx73jyO",
                "md5": "bae8c3f5c81724e106fe179e7d6eebba",
                "sha1": "d65eba98a3a70d4a03239eb8138654379b94cdf0",
                "sha256": "967ec01274d873da98c4c474b735f17f097a00b6a1641faf086180dddea0ef1a"
            },
            "dob": {
                "date": "1984-08-25T08:29:44.884Z",
                "age": 36
            },
            "registered": {
                "date": "2007-10-05T05:03:52.656Z",
                "age": 13
            },
            "phone": "(216)-407-1577",
            "cell": "(568)-738-7723",
            "id": {
                "name": "SSN",
                "value": "858-24-9388"
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/59.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/59.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/59.jpg"
            },
            "nat": "US"
        },
        {
            "gender": "female",
            "name": {
                "title": "Ms",
                "first": "Christiana",
                "last": "Krauße"
            },
            "location": {
                "street": {
                    "number": 1121,
                    "name": "Kiefernweg"
                },
                "city": "Elbe-Elster",
                "state": "Mecklenburg-Vorpommern",
                "country": "Germany",
                "postcode": 67809,
                "coordinates": {
                    "latitude": "-5.8643",
                    "longitude": "-40.4516"
                },
                "timezone": {
                    "offset": "-2:00",
                    "description": "Mid-Atlantic"
                }
            },
            "email": "christiana.krausse@example.com",
            "login": {
                "uuid": "6db1264d-6770-49f3-a76f-8601266ee26a",
                "username": "goldenmeercat453",
                "password": "neptune",
                "salt": "mmZnllvr",
                "md5": "742bf2db8da90ebb935003f6f2d5e49f",
                "sha1": "044ac504aa26384c38b7dc8c5500b7bf71f95a90",
                "sha256": "65e37008f94ecd8d40ae7a92fc5f4fccf9fee01cd5c1972674551cba8b091c34"
            },
            "dob": {
                "date": "1974-01-08T02:27:15.330Z",
                "age": 46
            },
            "registered": {
                "date": "2006-10-23T01:22:18.190Z",
                "age": 14
            },
            "phone": "0680-3652174",
            "cell": "0174-0255986",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/18.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/18.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/18.jpg"
            },
            "nat": "DE"
        }
    ];

    get devClasses (){
      return this._classes;
    }
    toggle(clas:string,...args){
      this.count++;
      return this._classes[clas] = !this._classes[clas];
    }
}
