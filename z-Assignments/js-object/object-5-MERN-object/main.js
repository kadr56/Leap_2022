
/*
1. Нэг хэрэглэгчийн объектын бүх утгыг авч хэвлэх.
2. Хэрэглэгчийн объектод олон ур чадвар эзэмшсэн хүнийг олоорой.
3. Нэвтэрсэн хэрэглэгчдийг тоолж, дараах объектоос 50-аас дээш оноо авсан хэрэглэгчдийг тоол.
4. Хэрэглэгчийн объектоос MERN ( MongoDB, Express, React, Node ) стек хөгжүүлэгч хүмүүсийг олоорой.
5. Хамгийн их настай 3 хүмүүсийн мэдээллийг хэвлэх
*/

const users = [
    {
        name:   'Alex',
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 45,
        isLoggedIn: false,
        points: 30
      },
    {
        name:   'Job',
        email: 'job@job.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
      },
    {
        name:   'Brook',
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 39,
        isLoggedIn: true,
        points: 50
      },
    {
        name:   'Daniel',
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 25,
        isLoggedIn: false,
        points: 40
      },
    {
        name:   'John',
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
      },
    {
        name:   'Thomas',
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 18,
        isLoggedIn: false,
        points: 40
      },
    {
        name:    'Paul',
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 40
      }
    ]


// 1. Нэг хэрэглэгчийн объектын бүх утгыг авч хэвлэх.
console.table(JSON.stringify(users[1], null, 4));

// 2. Хэрэглэгчийн объектод олон ур чадвар эзэмшсэн хүнийг олоорой.
console.log('\n2. Хэрэглэгчийн объектод олон ур чадвар эзэмшсэн хүнийг олоорой.');
findSkilled(users)

function findSkilled (array) {
    let skillsNumber = array[0];
    for(let i = 0; i < array.length; i++) {
      if(Number(skillsNumber.skills.length) < Number(array[i].skills.length)) {
        console.log(`Most Skilled worker is ${array[i].name} and has ${array[i].skills.length} skills`);
        skillsNumber = array[i];
      }
    }
}


// 3. Нэвтэрсэн хэрэглэгчдийг тоолж, дараах объектоос 50-аас дээш оноо авсан хэрэглэгчдийг тоол.
console.log('\n3. Нэвтэрсэн хэрэглэгчдийг тоолж, дараах объектоос 50-аас дээш оноо авсан хэрэглэгчдийг тоол.');
console.log('нийт нэвтэрсэн хэрэглэгчид = ' + users.length);
findHighGrade(users);

function findHighGrade(array) {
  let highPointUsers = []
  let counter = 0;
  for(let i = 0; i < array.length; i++) {
    if(array[i].points >= 50) {
      counter++
    }
  }
  console.log("50-с дээш оноотой хэрэглэгч = " + counter);
}


// 4. Хэрэглэгчийн объектоос MERN ( MongoDB, Express, React, Node ) стек хөгжүүлэгч хүмүүсийг олоорой.
console.log('\n4. Хэрэглэгчийн объектоос MERN ( MongoDB, Express, React, Node ) стек хөгжүүлэгч хүмүүсийг олоорой.');
findMERN(users);

function findMERN(array) {
  let userMERN = []
  for(let i = 0; i < array.length; i++) {
    if(array[i].skills.includes('MongoDB') && array[i].skills.includes('Express') && array[i].skills.includes('React') && array[i].skills.includes('Node')) {
      console.log("MERN developer: " + array[i].name);
    }
  }
}


// 5. Хамгийн их настай 3 хүмүүсийн мэдээллийг хэвлэх
console.log('\n5. Хамгийн хөгшин 3 хүмүүсийн мэдээллийг хэвлэх');
findOlder(users);

function findOlder(array) {
  let userOlder = []
  array.sort((firstItem, secondItem) => secondItem.age - firstItem.age);
  for(let i = 0; i < 3; i++) {
    console.log(JSON.stringify(array[i], null, 2));
  }
}