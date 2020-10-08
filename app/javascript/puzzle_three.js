function puzzle() {

  document.getElementById("form").style.display = "none";

  const get_class_name = document.querySelectorAll(".panel")
  get_class_name.forEach(function (one_of_panel) {
    //以下はforEachで一つのパネルに行う
    one_of_panel.addEventListener('click', function () {

      array = [one_of_panel.id.slice(0, 3), one_of_panel.id.slice(-3)]
      count = 0
      array.forEach(function (panel_str) {
        count += 1
        //以下はforEachで横と縦でそれぞれ同じ挙動をさせる
        //以下は前と後ろの仕分け
        if (panel_str == "one") {
          number = 1
        } else if (panel_str == "two") {
          number = 2
        } else if (panel_str == "thr") {
          number = 3
        }
        front_number = number + 1
        back_number = number - 1
        //以下は横
        if (count == 1) {
          if (front_number == 1) {
            side_front_number = "one"
          } else if (front_number == 2) {
            side_front_number = "two"
          } else if (front_number == 3) {
            side_front_number = "thr"
          } else {
            side_front_number = `${panel_str}`
          }
          if (back_number == 1) {
            side_back_number = "one"
          } else if (back_number == 2) {
            side_back_number = "two"
          } else if (back_number == 3) {
            side_back_number = "thr"
          } else {
            side_back_number = `${panel_str}`
          }
          //以下は縦
        } else if (count == 2) {
          if (front_number == 1) {
            vertical_front_number = "one"
          } else if (front_number == 2) {
            vertical_front_number = "two"
          } else if (front_number == 3) {
            vertical_front_number = "thr"
          } else {
            vertical_front_number = `${panel_str}`
          }
          if (back_number == 1) {
            vertical_back_number = "one"
          } else if (back_number == 2) {
            vertical_back_number = "two"
          } else if (back_number == 3) {
            vertical_back_number = "thr"
          } else {
            vertical_back_number = `${panel_str}`
          }
        }
      })
      //forEach(横と縦)終了
      //生成した文字列からidを取得

      left_number = document.getElementById(`${one_of_panel.id.slice(0, 3)}-${vertical_front_number}`)
      right_number = document.getElementById(`${one_of_panel.id.slice(0, 3)}-${vertical_back_number}`)
      up_number = document.getElementById(`${side_front_number}-${one_of_panel.id.slice(-3)}`)
      down_number = document.getElementById(`${side_back_number}-${one_of_panel.id.slice(-3)}`)

      next_to_panel = [one_of_panel, left_number, right_number, up_number, down_number]
      //色の変更
      color_count = 0
      if (one_of_panel.getAttribute("style") == "background-color:lightcoral;") {
        one_of_panel.setAttribute("style", "background-color:lightblue;")
      } else if (one_of_panel.getAttribute("style") == "background-color:lightblue;") {
        one_of_panel.setAttribute("style", "background-color:lightcoral;")
      }
      if ((left_number.getAttribute("style") == ("background-color:lightcoral;")) && (one_of_panel.id != left_number.id)) {
        left_number.setAttribute("style", "background-color:lightblue;")
      } else if ((left_number.getAttribute("style") == ("background-color:lightblue;")) && (one_of_panel.id != left_number.id)) {
        left_number.setAttribute("style", "background-color:lightcoral;")
      }
      if ((right_number.getAttribute("style") == ("background-color:lightcoral;")) && (one_of_panel.id != right_number.id)) {
        right_number.setAttribute("style", "background-color:lightblue;")
      } else if ((right_number.getAttribute("style") == ("background-color:lightblue;")) && (one_of_panel.id != right_number.id)) {
        right_number.setAttribute("style", "background-color:lightcoral;")
      }
      if ((up_number.getAttribute("style") == ("background-color:lightcoral;")) && (one_of_panel.id != up_number.id)) {
        up_number.setAttribute("style", "background-color:lightblue;")
      } else if ((up_number.getAttribute("style") == ("background-color:lightblue;")) && (one_of_panel.id != up_number.id)) {
        up_number.setAttribute("style", "background-color:lightcoral;")
      }
      if ((down_number.getAttribute("style") == ("background-color:lightcoral;")) && (one_of_panel.id != down_number.id)) {
        down_number.setAttribute("style", "background-color:lightblue;")
      } else if ((down_number.getAttribute("style") == ("background-color:lightblue;")) && (one_of_panel.id != down_number.id)) {
        down_number.setAttribute("style", "background-color:lightcoral;")
      }
      // debugger
      //成功判定
      success_count = 0
      success_judgment = document.querySelectorAll(".panel")
      success_judgment.forEach(function (success) {
        if (success.getAttribute("style") == ("background-color:lightblue;")) {
          success_count += 1
        }
      })
      if (success_count == 9) {
        document.getElementById("success").innerHTML = "成功！"
        document.getElementById("form").style.display = "block";
      }
    })

  })
  //forEach(1パネルづつ)終了
}
window.addEventListener('load', puzzle)

