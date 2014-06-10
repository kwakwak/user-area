'use strict';

angular.module('userAreaApp')
  .constant('dicti', {
        err : {
            login: 'שם משתמש או סיסמה שגויים.',
            invtie: 'שליחת ההזמנה נכשלה.',
            email : "האימייל לא תקין או שהוא קיים במערכת"
        },
        email: 'אימייל',
        password: 'סיסמה',
        login: 'התחברות',
        invite: 'שלח הזמנה',
        inviteMsg: 'ההזמנה נשלחה בהצלחה.'

    });
