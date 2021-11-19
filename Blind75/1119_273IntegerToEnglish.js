// Input: num = 123
// Output: "One Hundred Twenty Three"

// Input: num = 12345
// Output: "Twelve Thousand Three Hundred Forty Five"

// Input: num = 1234567891
// Output: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"

var numberToWords = function(num) {
  // edge
  if (num === 0) return 'Zero';
  //
  var postfix = ['', 'Thousand', 'Million', 'Billion'];
  var unit = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven',
             'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen',
             ];
  var tens = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

  var every3 = (x) => {
      let res = '';
      if (x >= 100) {
          res += unit[Math.floor(x/100)] + ' Hundred ';
          x = x % 100
      }
      if (x >= 20) {
          res += tens[Math.floor(x/10)] + ' ';
          x %= 10
      }
      res += unit[x];
      //console.log(res);
      return res.trim();
  }

  var i = 0, output = [];
  while (num >= 1) {
      let temp = Math.floor(num/1000)
      let part = every3(num - temp*1000);
      if (part) {
          output.unshift(part, postfix[i]);
      }
      num = temp;
      i++;
  }

  return output.join(' ').trim();
};