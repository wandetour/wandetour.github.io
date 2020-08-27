var quotes = [
    'It does not matter how slowly you go as long as you do not stop.<br><br>Confucius',
    'If you don\'t go after what you want, you\'ll never have it. If you don\'t ask, the answer is always no. If you don\'t step forward, you\'re always in the same place.<br><br>Nora Roberts',
    'Begin with the end in mind.<br><br>Stephen Covey',
    'Too many of us are not living our dreams because we are living our fears.<br><br>Les Brown',
    'The difference between a successful person and others is not lack of strength or lack of knowledge, but rather a lack of will.<br><br>Vince Lombardi',
    'Success seems to be connected with action. Successful people keep moving. They make mistakes, but they don’t quit.<br><br>Conrad Hilton',
    'If you hear a voice within you say \'you cannot paint,\' then by all means paint and that voice will be silenced.<br><br>Vincent Van Gogh',
    'The surest way not to fail is to determine to succeed.<br><br>Richard B. Sheridan',
    'Desire is the starting point of all achievement, not a hope, not a wish, but a keen pulsating desire, which transcends everything.<br><br>Napoleon Hill',
    'Again, you can\'t connect the dots looking forward. You can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future. You have to trust in something, whether your gut, destiny, life, karma, whatever. This approach has never let me down and it has made all the difference in my life.<br><br>Steve Jobs',
    'A computer once beat me at chess, but it was no match for me at kickboxing.<br><br>Emo Philips',
    'Whether I fail or succeed shall be no man\'s doing but my own. I am the force.<br><br>Elaine Maxwell',
    'To find a fault is easy, to do better may be difficult.<br><br>Plutarch',
    'To give yourself the best possible chance of playing to your potential, you must prepare for every eventuality. That means practice.<br><br>Steve Ballesteros',
    'To handle yourself, use your head. To handle others, use your heart.<br><br>Donald Laird',
    'To think creatively, we must be able to look afresh at what we normally take for granted.<br><br>George Kneller',
    'We all have ability. The difference is how we use it.<br><br>Stevie Wonder',
    'We are what we repeatedly do. Excellence, then, is not an act, but a habit.<br><br>Aristotle',
    'To succeed you need to find something to hold on to, something to motivate you, something to inspire you.<br><br>Tony Dorsett',
    'Things which matter most must never be at the mercy of things which matter least.<br><br>Goethe',
    'Wherever you go, go with all your heart.<br><br>Confucius',
    'Every day is a journey, and the journey itself is home.<br><br>Matsuo Basho',
    'A good traveler has no fixed plans, and is not intent on arriving.<br><br>Lao Tzu',
    'The pessimist sees difficulty in every opportunity. The optimist sees the opportunity in every difficulty.<br><br>Winston Churchill',
    'Don\'t let yesterday take up too much of today.<br><br>Will Rodgers',
    'It\'s not whether you get knocked down, it\'s whether you get up.<br><br>Vince Lombardi',
    'If you are working on something exciting that you really care about, you don\'t have to be pushed. The vision pulls you.<br><br>Steve Jobs',
    'Whether you think you can or think you can\'t, you\'re right.<br><br>Henry Ford',
    'The only limit to our realization of tomorrow will be our doubts of today.<br><br>Franklin D. Roosevelet',
    'Creativity is intelligence having fun.<br><br>Albert Einstein',
    'You are never too old to set another goal or to dream a new dream.<br><br>C.S. Lewis',
    'Today\'s accomplishments were yesterday\'s impossibilities.<br><br>Robert H. Schuller',
    'If you haven\'t found it yet, keep looking. Don\'t settle.<br><br>Steve Jobs',
    'Perpetual optimism is a force multiplier.<br><br>Colin Powell',
    'Strength does not come from winning. Your struggles develop your strengths. When you go through hardships and decide not to surrender, that is strength.<br><br>Arnold Schwarzenegger',
    'The world breaks everyone, and afterward, some are strong at the broken places.<br><br>Ernest Hemingway',
    'All the adversity I\’ve had in my life, all my troubles and obstacles, have strengthened me. You may not realize it when it happens, but a kick in the teeth may be the best thing in the world for you.<br><br>Walt Disney',
    'A truly strong person does not need the approval of others any more than a lion needs the approval of sheep.<br><br>Vernon Howard',
    'There are better starters than me, but I\’m a strong finisher.<br><br>Usain Bolt',
    'He who believes is strong. He who doubts is weak. Strong convictions precede great actions.<br><br>Louisa May Alcott',
    'Strength and growth come only through continuous effort and struggle.<br><br>Napoleon Hill',
    'Make up your mind that no matter what comes your way, no matter how difficult, no matter how unfair, you will do more than simply survive. You will thrive in spite of it.<br><br>Joel Osteen',
    'Tough times never last, but tough people do.<br><br>Robert H. Schuller',
    'I believe that tomorrow is another day.<br><br>Audrey Hepburn',
    'That which does not kill us makes us stronger.<br><br>Friedrich Nietzsche',
    'If you are not willing to risk the usual you will have to settle for the ordinary.<br><br>Jim Rohn',
    'Either write something worth reading or do something worth writing.<br><br>Benjamin Franklin',
    'You may be disappointed if you fail, but you are doomed if you don’t try.<br><br>Beverly Sills',
    'Dream big and dare to fail.<br><br>Norman Vaughan',
    'Build your own dreams or someone else will hire you to build theirs.<br><br>Farrah Gray',
    'I would rather die of passion than of boredom.<br><br>Vincent Van Gogh',
    'I didn\’t fail the test. I just found 100 ways to do it wrong.<br><br>Benjamin Franklin',
    'Limitations live only in our minds, but if we use our imaginations, our possibilities become limitless.<br><br>Jamie Paolinetti',
    'Challenges are what make life interesting and overcoming them is what makes life meaningful.<br><br>Joshua J. Marine',
    'Too many of us are not living our dreams because we are living our fears.<br><br>Les Brown',
    'Happiness is not something readymade. It comes from your own actions.<br><br>Dalai Lama',
    'When I let go of what I am, I become what I might be.<br><br>Lao Tzu',
    'The best revenge is massive success.<br><br>Frank Sinatra',
    'Either you run the day or the day runs you.<br><br>Jim Rohn',
    'I am thankful for all of those who said NO to me. It is because of them I\’m doing it myself.<br><br>Albert Einstein',
    'Don\’t worry about failures, worry about the chances you miss when you don\’t even try.<br><br>Jack Canfield',
    'It is never too late to be what you might have been.<br><br>George Eliot',
    'All our dreams can come true if we have the courage to pursue them.<br><br>Walt Disney',
    'If you cannot do great things, do small things in a great way<br><br>Napoleon Hill',
    'An obstacle is often a stepping stone.<br><br>William Prescott',
    'The journey of a thousand miles begins with one step.<br><br>Lao Tzu',
    'What you do speaks so loudly that I cannot hear what you say.<br><br>Ralph Waldo Emerson',
    'You must be the change you wish to see in the world.<br><br>Gandhi',
    'Tough times never last, but tough people do.<br><br>Dr. Robert Schuller',
    'The best way out is always through.<br><br>Robert Frost',
    'Keep your face to the sunshine and you will never see the shadow.<br><br>Helen Keller',
    'The best dreams happen when you’re awake.<br><br>Cherie Gilderbloom',
    'The difference between ordinary and extraordinary is that little extra.<br><br>Jimmy Johnson',
    'You must not only aim right, but draw the bow with all your might.<br><br>Henry David Thoreau',
    'Even if you\’re on the right track, you\’ll get run over if you just sit there.<br><br>Will Rogers',
    'Every strike brings me closer to the next home run.<br><br>Babe Ruth',
    'A year from now you may wish you had started today.<br><br>Karen Lamb',
    'If there is no struggle, there is no progress.<br><br>Frederick Douglass',
    'What we fear doing most is usually what we most need to do.<br><br>Tim Ferris',
    'Your imagination is your preview of life\’s coming attractions.<br><br>Albert Einstein',
    'Even if you fall on your face, you\’re still moving forward.<br><br>Victor Kiam',
    'The purpose of our lives is to be happy.<br><br>Dalai Lama',
    'The dreamers are the saviors of the world.<br><br>James Allen',
    'Change your thoughts and you change your world.<br><br>Norman Vincent Peale',
    'Action is the foundational key to all success.<br><br>Pablo Picasso',
    'I will go anywhere as long as it is forward.<br><br>David Livingston',
    'The creation of a thousand forests is in one acorn.<br><br>Ralph Waldo Emerson',
    'It wasn\’t raining when Noah built the ark.<br><br>Howard Ruff',
    'Never let your memories be greater than your dreams.<br><br>Doug Ivester',
    'We are what we repeatedly do. Excellence, then, is not an act, but a habit.<br><br>Aristotle',
    'The greatest discovery of my generation is that a human being can alter his life by altering the attitudes of his mind.<br><br>William James',
    'The aim of an argument or discussion should not be victory, but progress.<br><br>Joseph Joubert',
    'Only those who will risk going too far can possibly find out how far one can go.<br><br>T.S. Eliot',
    'To live is the rarest thing in the world. Most people exist, that is all.<br><br>Oscar Wilde',
    'Freedom is not the absence of commitments, but the ability to choose yours.<br><br>Paulo Coelho',
    'Conformity is the jailer of freedom and the enemy of growth.<br><br>John F. Kennedy',
    'Every man dies, but not every man really lives.<br><br>William Wallace',
    'Nothing important was ever achieved without someone taking a chance.<br><br>H. Jackson Brown',
    'Success is walking from failure to failure with no loss of enthusiasm.<br><br>Winston Churchill',
    'Opportunities don\’t happen, you create them.<br><br>Chris Grosser',
    'Try not to become a person of success, but rather try to become a person of value.<br><br>Albert Einstein',
    'Great minds discuss ideas, average minds discuss events, small minds discuss people.<br><br>Eleanor Roosevelt',
    'No one can make you feel inferior without your consent.<br><br>Eleanor Roosevelt',
    'If you’re going through hell keep going.<br><br>Winston Churchill',
    'What seems to us as bitter trials are often blessings in disguise.<br><br>Oscar Wilde',
    'The distance between insanity and genius is measured only by success<br><br>Bruce Feirstein',
    'Don\’t be afraid to give up the good to go for the great.<br><br>John D. Rockefeller',
    'Life is not about finding yourself. Life is about creating yourself.<br><br>Lolly Daskal',
    'Innovation distinguishes between a leader and a follower.<br><br>Steve Jobs',
    'There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.<br><br>Ray Goforth',
    'The starting point of all achievement is desire.<br><br>Napolean Hill',
    'Courage is resistance to fear, mastery of fear - not absence of fear.<br><br>Mark Twain',
    'A real entrepreneur is somebody who has no safety net underneath them.<br><br>Henry Kravis',
    'The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.<br><br>Mark Caine',
    'Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.<br><br>Dale Carnegie',
    'Don\’t let the fear of losing be greater than the excitement of winning.<br><br>Robert Kiyosaki',
    'To accomplish great things, we must not only act, but also dream, not only plan, but also believe.<br><br>Anatole France',
    'It is better to fail in originality than to succeed in imitation.<br><br>Herman Melville',
    'The only thing standing between you and your goal is the bullshit story you keep telling yourself as to why you can\’t achieve it.<br><br>Jordan Belfort',
    'You can\’t build a reputation on what you are going to do.<br><br>Henry Ford',
    'When someone tells me \“no,\” it doesn’t mean I can’t do it, it simply means I can\’t do it with them.<br><br>Karen E. Quinones Miller',
    'Whatever the mind can conceive and believe, it can achieve.<br><br>Napoleon Hill',
    'We become what we think about.<br><br>Earl Nightingale',
    'You can never cross the ocean until you have the courage to lose sight of the shore.<br><br>Christopher Columbus',
    'The two most important days in your life are the day you are born and the day you find out why.<br><br>Mark Twain',
    'The only person you are destined to become is the person you decide to be.<br><br>Ralph Waldo Emerson',
    'Everything you\’ve ever wanted is on the other side of fear.<br><br>George Addair',
    'Start where you are. Use what you have. Do what you can.<br><br>Arthur Ashe',
    'Too many of us are not living our dreams because we are living our fears.<br><br>Les Brown',
    'Limitations live only in our minds. If we use our imaginations, our possibilities become limitless.<br><br>Jamie Paolinetti',
    'Your time is limited, so don\’t waste it living someone else\’s life.<br><br>Steve Jobs',
    'Winning isn\’t everything, but wanting to win is.<br><br>Vince Lombardi',
    'You never know how strong you are, until being strong is the only choice you have.<br><br>Bob Marley',
    'We are what we repeatedly do. Excellence, therefore, is not an act but a habit.<br><br>Aristotle',
    'A person who never made a mistake never tried anything new.<br><br>Albert Einstein',
    'It does not matter how slowly you go as long as you do not stop.<br><br>Confucius',
    'I\’ve missed more than 9000 shots in my career. I\’ve lost almost 300 games. 26 times, I\’ve been trusted to take the game winning shot and missed. I\’ve failed over and over and over again in my life and that is why I succeed.<br><br>Michael Jordan',
    'You must be the change you want to see in the world.<br><br>Mahatma Gandhi',
    'If you want to make your dreams come true, the first thing you have to do is wake up.<br><br>J.M. Power',
    'Twenty years from now you will be more disappointed by the things that you didn\’t do than by the ones you did do.<br><br>Mark Twain',
    'Work until your idols become your rivals.<br><br>Drake',
    'If you truly pour your heart into what you believe in, even if it makes you vulnerable, amazing things can and will happen.<br><br>Emma Watson'
];

var images = [
    'image/0.jpg',
    'image/1.jpg',
    'image/2.jpg',
    'image/3.jpg',
    'image/4.jpg',
    'image/5.jpg',
    'image/6.jpg',
    'image/7.jpg',
    'image/8.jpg',
    'image/9.jpg',
    'image/10.jpg',
    'image/11.jpg',
    'image/12.jpg',
    'image/13.jpg',
    'image/14.jpg',
    'image/15.jpg',
    'image/16.jpg',
    'image/17.jpg',
    'image/18.jpg',
    'image/19.jpg',
    'image/20.jpg',
    'image/21.jpg',
    'image/22.jpg',
    'image/23.jpg',
    'image/24.jpg',
    'image/25.jpg',
    'image/26.jpg',
    'image/27.jpg',
    'image/28.jpg',
    'image/29.jpg',
    'image/30.jpg',
    'image/31.jpg',
    'image/32.jpg',
    'image/33.jpg',
    'image/34.jpg',
    'image/35.jpg',
    'image/36.jpg',
    'image/37.jpg',
    'image/38.jpg',
    'image/39.jpg',
    'image/40.jpg',
    'image/41.jpg',
    'image/42.jpg',
    'image/43.jpg',
    'image/44.jpg',
    'image/45.jpg',
    'image/46.jpg',
    'image/47.jpg',
    'image/48.jpg',
    'image/49.jpg',
    'image/50.jpg'
];

function newQuote(){
    var a = 0;
    var a = Math.floor(Math.random()*(quotes.length));
    document.getElementById("quoteD").innerHTML = quotes[a]
    $('.intro').css("background-image", "url(image/"+newImage()+".jpg)");
};

function newImage(){
    var b = 0;
    var b = Math.floor(Math.random()*(images.length));
    return b;
}



