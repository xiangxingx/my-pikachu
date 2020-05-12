$.noConflict()
jQuery(document).ready(function ($) {
  var speed = 2
  $('.actions').on('click', 'button', function (ev) {
    var $button = $(ev.currentTarget)
    var state = $button.attr('data-speed')
    function setSpeed(state) {
      var actions = {
        fast: function () {
          return 2
        },
        normal: function () {
          return 6
        },
        slow: function () {
          return 18
        }
      }
      return actions[state]()
    }
    speed = setSpeed(state)
    $button.addClass('active').siblings().removeClass('active')
  })
 
  function writeCode(code) {
    var n = 0
    var timer = setTimeout(function fn() {
      var currentCode = code.substring(0, n)
      $('#styleTag').html(currentCode)
      $('#code').text(currentCode).scrollTop(100000)
      n += 1
      if (n <= code.length) {
        timer = setTimeout(fn, speed)
      } else {
        clearTimeout(timer)
      }
    }, speed)
  }

  const code = `
  /* 用 CSS 画只皮卡丘吧 */

  .preview {
    background: #ffdc2b;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .wrapper {
    width: 100%;
    height: 165px;
    position: relative;
  }
  .nose {
    position: absolute;
    width: 0;
    height: 0;
    border: 12px solid black;
    border-color: black transparent transparent transparent;
    border-radius: 50%;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
  }
  .eye {
    position: absolute;
    height: 50px;
    width: 50px;
    background-color: #2e2e2e;
    border: 2px solid black;
    border-radius: 50%;
  }
  .eye::after {
    position: absolute;
    content: "";
    display: inline-block;
    height: 25px;
    width: 25px;
    background-color: white;
    border: 2px solid black;
    border-radius: 50%;
    top: -1px;
    left: 6px;
  }
  .eye.left {
    right: 50%;
    margin-right: 88px;
  }
  .eye.right {
    left: 50%;
    margin-left: 88px;
  }
  .face {
    position: absolute;
    height: 68px;
    width: 68px;
    background-color: #ff251a;
    border: 2px solid black;
    border-radius: 50%;
    top: 85px;
  }
  .face.left {
    right: 50%;
    margin-right: 100px;
  }
  .face.right {
    left: 50%;
    margin-left: 100px;
  }
  .upperLip {
    position: absolute;
    height: 24px;
    width: 80px;
    border: 2px solid black;
    border-top: transparent;
    top: 52px;
    z-index: 1;
    background-color: #ffdc2b;
  }
  .upperLip.left {
    border-right: transparent;
    right: 50%;
    transform: rotate(-0.04turn);
    border-bottom-left-radius: 26px;
  }
  .upperLip.right {
    border-left: transparent;
    left: 50%;
    transform: rotate(0.04turn);
    border-bottom-right-radius: 26px;
  }
  .lowerLip-wrapper {
    position: absolute;
    overflow: hidden;
    left: 50%;
    transform: translateX(-50%);
    height: 120px;
    width: 200px;
    top: 64px;
  }
  .lowerLip {
    position: absolute;
    overflow: hidden;
    left: 50%;
    transform: translateX(-50%);
    width: 160px;
    height: 1000px;
    border-radius: 100px/600px;
    border: 2px solid black;
    bottom: 6px;
    background-color: #a91411;
  }
  .lowerLip::after {
    content: "";
    position: absolute;
    bottom: 0;
    display: inline-block;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 94px;
    border-radius: 50%;
    background-color: #ff5d62;
  }`
  writeCode(code)
})



