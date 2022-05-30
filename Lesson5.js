//let name = prompt("Как вас зовут?")
//if(name === "ALEX" || name.toLowercase() === alex){
//    let account = +prompt("Номер счета?")
//    if(account === 7777){
//        let money = 10000
//        let snyat = +prompt("Сколько хотите обналичить?")
//        let ostatok = money - snyat
//        if(snyat <= money){
//            alert(
//                "Успешно вы сняли " +snyat + " суммов" + " " +
//                "У вас осталось" + " " + ostatok + " суммов"
//            )
//        }else{
//            alert(
//                "у вас недостаточно средств на счету"
//            )
//       }    
//    }
//    else{
//        alert(
//            "Откройте счет"
//        )
//    }
//}
//else{
//    alert(
//        "Регистрируйся"
//    )
//}

  let freePlace = +prompt("Сколько свободных мест?")
  let people = +prompt("Сколько вас?")
  if(freePlace > people){  
  let nameOne = prompt("Как вас зовут?")
  if(nameOne.charAt(0) === "a" || nameOne.charAt(0) === "A"){
      let age = +prompt("Сколько вам лет?")
      if(age > 20 && age < 40){
          let deneg =+prompt("Сколько у вас наличных?")
          if(deneg > 100){
              alert(
                  "Добро пожаловать"
              )
          }
          else{
              alert(
                  "У вас недостаточно денег для входа в наше заведение.Извините"
              )
          }
      }
      else if(age < 20){
          alert(
                "Вы еще молоды для нашего заведения"
            )
          }
      else{
          alert(
              "Вы достаточно стары для нашего заведения"
          )
      }    
      }
      else{
          alert(
              "Вас нет в списке приглашенных"
          )
      }
    }
    else{
        alert(
            "У нас недостаточно мест для вас"
        )
    }
  