import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  users = [
    {
      id: 1,
      name: 'viet',
      age: 19,
      phone: '0393235573',
      avatar: 'https://scontent.fhan2-1.fna.fbcdn.net/v/t39.30808-6/275829911_510857153735040_4500636288896122914_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=VttN9kyn2wwAX8vMMJD&_nc_ht=scontent.fhan2-1.fna&oh=00_AT_LHgHsf6KgnKxECyXoJJ6a21f1nfRmgiBgCrJ4i8gJUA&oe=62362552'
    },
    {
      id: 2,
      name: 'viet2',
      age: 10,
      phone: '0393235573',
      avatar: 'https://scontent.fhan2-1.fna.fbcdn.net/v/t39.30808-6/275829911_510857153735040_4500636288896122914_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=VttN9kyn2wwAX8vMMJD&_nc_ht=scontent.fhan2-1.fna&oh=00_AT_LHgHsf6KgnKxECyXoJJ6a21f1nfRmgiBgCrJ4i8gJUA&oe=62362552'
    },
    {
      id: 3,
      name: 'viet3',
      age: 13,
      phone: '0393235573',
      avatar: 'https://scontent.fhan2-1.fna.fbcdn.net/v/t39.30808-6/275829911_510857153735040_4500636288896122914_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=VttN9kyn2wwAX8vMMJD&_nc_ht=scontent.fhan2-1.fna&oh=00_AT_LHgHsf6KgnKxECyXoJJ6a21f1nfRmgiBgCrJ4i8gJUA&oe=62362552'
    },
  ];
  usersFilter = this.users;

  // Dinh nghia ham xoa khi click nut Delete
  remove(userId: number) {
    // this.users ~ thuoc tinh users cua class UserComponent
    this.usersFilter = this.usersFilter.filter(function (user) {
      return user.id !== userId
    });
  }

  // Mo rong, cho phep tim kiem bang tieng viet
  convertVietnameseToUnicode(value: string) {
    const a = 'àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;'
    const b = 'aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------'
    const p = new RegExp(a.split('').join('|'), 'g');

    return value.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a')
      .replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e')
      .replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i')
      .replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o')
      .replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u')
      .replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y')
      .replace(/đ/gi, 'd')
      .replace(/\s+/g, '-')
      .replace(p, c => b.charAt(a.indexOf(c)))
      .replace(/&/g, '-and-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  };

  // Dinh nghia ham search sau khi nhap vao o input
  onSearch(event: any) {
    // 1. Xu ly viec tim kiem chu hoa chu thuong
    // Dua ca value va name ve dang chu thuong
    // 2. Khoang trang dau va cuoi value cua input
    // su dung phuong thuc .trim()
    const value = event.target.value;
    const lowerCaseInputValue = value.toLowerCase();
    const lowerCaseTrimInputValue = lowerCaseInputValue.trim();
    const unicodeValue = this.convertVietnameseToUnicode(lowerCaseTrimInputValue);
    // Gan cho usersFilter de khong thay doi users goc nua
    // Doi hien thi danh sach theo usersFilter
    this.usersFilter = this.users.filter(function (user) {
      const lowerCaseUserName = user.name.toLowerCase();

      return lowerCaseUserName.indexOf(unicodeValue) !== -1;
    });
  }
  //them moi user
  //1. định nghĩa 1 obj newUser trung gian
  //nhận giá trị input đầu vào ,sau khi submit sẽ gán về giá trị gốc
  newUser = {
    id: 0,
    name: '',
    age: 0,
    phone: '',
    avatar: ''
  };
  onChange(event: any, key: string) {
    //
    this.newUser = {
      ...this.newUser,
      [key]: event.target.value
    };
    //  newUser = {
    //   id: this.users.length + 1,


    // };
    console.log(this.newUser);

  };
  onSubmit() {
    if (!this.onValidate(this.newUser)) {
      return;
    }
    //1.1 kiểm tra xem sửa có phải đang sửa không
    if (this.isEdit) {
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].id === this.newUser.id) {
          this.users[i] = this.newUser;
        }
      }
      this.isEdit = false;
    } else {
      this.newUser.id = this.users.length + 1;
      this.users.push(this.newUser);
    }



    this.newUser.id = this.users.length + 1;
    this.users.push(this.newUser);
    this.newUser = {
      id: 0,
      name: '',
      age: 0,
      phone: '',
      avatar: ''
    }
  }
  onValidate(obj: any) {
    if (!obj.name || !obj.age || obj.age <= '0' || !obj.phone || !obj.avatar) {
      return false;
    }
    return true;
  }
  isEdit = false;
  onEdit(obj: any) {
    this.newUser = obj;
    //chuyển trạng thái sửa thành true
    this.isEdit = true;
    //sau đó sẽ xử lý tiếp ở submit


  }
}
