var arrLang = {
    'ro': {
        'titleslide1': 'Inspirate Inspiratia ta',
        'paragraphslide1': 'Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice. Lorem Ipsum a fost macheta standard a industriei încă din secolul al XVI-lea, când un tipograf anonim a luat o planşetă de litere şi le-a amestecat pentru a crea o carte demonstrativă pentru literele respective.',
        'titleslide2': 'Tinyone functionalitati',
        'paragraphslide2': 'Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice.',
        'titleparagraph1': 'Fully Responsive',
        'paragraph1': 'Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice. Lorem Ipsum a fost macheta standard a industriei încă din secolul al XVI-lea, când un tipograf anonim a luat o planşetă de litere şi le-a amestecat pentru a crea o carte demonstrativă pentru literele respective. Nu doar că a supravieţuit timp de cinci secole, dar şi a facut saltul în tipografia electronică practic neschimbată',
        'titleparagraph1': 'HTML3 & CSS3',
        'titleparagraph2': 'Font Awesome Icons',
        'titleparagraph3': "Free to download",
        'paragraphall3': "Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice. Lorem Ipsum a fost macheta standard a industriei încă din secolul al XVI-lea, când un tipograf anonim a luat o planşetă de litere şi le-a amestecat pentru a crea o carte demonstrativă pentru literele respective.",
        'titleslide3': 'Ramai cu noi in legatura',
        'paragraphslide3': "Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice."




    },
    'en': {
        'titleslide1': 'Inspire your inspiration',
        'paragraphslide1': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        'titleslide2': 'Tinyone feutures',
        'paragraphslide2': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        'titleparagraph1': 'Fully Responsive',
        'paragraph1': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        'titleparagraph1': 'HTML3 & CSS3',
        'titleparagraph2': 'Font Awesome Icons',
        'titleparagraph3': 'Free to download',
        'paragraphall3': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        'titleslide3': 'Keep in touch with us',
        'paragraphslide3': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'



    }
};

$(function () {
    $('.translate').click(function () {
        var lang = $(this).attr('id');

        $('.lang').each(function (index, element) {
            $(this).text(arrLang[lang][$(this).attr('key')]);


        });

    });

});
