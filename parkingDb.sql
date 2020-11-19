create database ParkingDb

use ParkingDb

CREATE table UserDetail (Id int Primary Key identity, Name varchar(200) not null, Address text, Status int default 0,CreatedDate datetime default GetDate(), ModifiedDate datetime)
                                                                                                                                    
create table UserType(Id int primary key identity, UserId int references UserDetail(Id), Type int not null,  Status int default 0, CreateDate datetime default GetDate(), ModifiedDate datetime)  

create table Parking(Id int primary key identity, Name varchar(200) not null, Code varchar(200) not null, Description text not null, Slots int not null, Price Decimal not null, Minutes int not null, CreatorId int references UserDetail(Id),Status int default 0, CreatedDate datetime default GetDate(), ModifiedDate datetime)
       
create table ParkingSlot(Id int primary key identity, ParkingId int references Parking(Id), Code varchar(200) not null, Status int default 0, CreatedDate datetime default GetDate(), ModifiedDate datetime)     

create table ParkedVehicle(Id int primary key identity, Name varchar(200) not null, Code varchar(200) not null, ParkingSlotId int references ParkingSlot(Id), Fee Decimal, StartTime datetime not null, EndTime datetime, Status int default 0, CreatedDate datetime default GetDate(), ModifiedDate datetime)                      

insert into UserDetail(Name, Address, Status) values ('Test Manager', 'India', 0)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        