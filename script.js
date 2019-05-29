const comp = ['Ask me who/what/where is the avant garde today', 'The rich coming to ask for bread','Deep down in the broken glass were the remains of Hilary', 'Cheating hipsters', 'Freedom unlike no other','A light-filled abyss unknown to man', 'Particles', 'The ruthless description can\'t disarm the lesson','It was then the adhesive dirt met the canine in regret', 'The sick snake not daring to spare another edible','Three hundred and thirty two days of volunteering', 'Don\'t do the crime if you can\'t be sly', 'Sexy resurrections','Not smoking marijuana', 'That guy who lives with his mom', 'Listening to everything but what\'s on the radio', 'Necrophilia','The hope you won\'t be utterly useless','Your mom', 'Getting an STD from a one night stand', 'A wish upon as shooting star','A dick in a box','MAking pillowcases out of letters','Getting out of a room right before sex', 'T-shirt quilts','Prom is in two days, I have so many face masks to do','Eating only the frosting off of cupcakes','I\'ll format the poster, while you do the content', 'Two fingers for the front, one for the back','Put lube all over me','This is a really good statement','50% of people feel ambiguity smells like vomit. The other 50% are not so sure.','A budget Kanye','Waking up to find out the 2016 presidential election was a joke', 'World War III', 'Time is extremely valuable... people prefer to waste it','Paying the price of knowledge', 'Giving birth to water lillies', 'Not knowing the difference between there, they\'re, and their','No comment.', 'Being undoubtedly busy with the diplomatic relationship between men\'s testicles and women\'s breasts', 'Generally speaking, a dick isn\'t really photogenic','Marriage, it\'s like roulette: sometimes one wins, often one loses. Even if you\'re very in love, it can still go bad.', 'Men\'s pride is situated in their scrotums', 'In time you\'ll learn to love your spouse', 'Physical beauty masks the darkness of one\'s soul'];
var clicked=false;

$('document').ready(function(){
  $('#popShadow').hide(0).fadeIn(1000);
});

$('#goTo').on('click', function(){
  if (!clicked){
    $('#popShadow').fadeOut(800, function(){
      $('#popShadow').hide(0);
    });
    setTimeout(function(){
      compResponse(0);
    }, 1800);

    clicked = true;
  }
});

$('#msg').on('keypress', function(k){
  var code = (k.keyCode ? k.keyCode : k.which);
  if (code == 13) {
    insert(this.value);
    this.value = this.value.replace(/\n/g,'');
    this.value = '';
    this.setAttribute('readonly', 'readonly');
    setTimeout(function(){
      compResponse(generateNum());
    }, 1800);
  }
});


function insert(str){
  $('#texts').append('<div class="user">' + str + "</div>");
  $('#texts').animate({scrollTop: $('#texts').prop('scrollHeight')}, 300);
}

function generateNum(){
  var max = comp.length-1;
  var num = Math.floor(Math.random() * max) + 1;

  return num;
}

function compResponse(num){
  $('#texts').append('<div class="comp">' + comp[num] + "</div>");
  $('#texts').animate({scrollTop: $('#texts').prop('scrollHeight')}, 300);
  document.getElementById('msg').removeAttribute('readonly');
}
