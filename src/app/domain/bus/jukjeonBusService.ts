import { busApi } from "@/app/api/busApi";
import { BusGroupData } from "./busGroupData.types";
import { BusApiStation } from "@/app/api/busApi.types";
import { predictTime, prevMin, nextTime, beforeTime, leftStation } from "@/app/domain/bus/busInfo.utils.deprecated";

export const jukjeonBusService = {
  getJukjeonBusInfo: async (): Promise<BusGroupData[]> => {

    const data : BusApiStation[] = await busApi.getJukjeonBusInfo();
    return [
      {
        header: '학교 출발',
        buses: [
          {
            busNumber: '셔틀버스',
            busStation: '곰상출발',
            busTime: predictTime('gomstation', 'gomstationshuttle', data),
            lastStation: prevMin('gomstation', 'gomstationshuttle', data),
            busColor: '#296bce',
          },
          {
            busNumber: '24',
            busStation: '단국대정문',
            busTime: predictTime('dankookmaingate_to_jukjeonstation', '24', data),
            lastStation: leftStation('dankookmaingate_to_jukjeonstation', '24', data),
            busColor: '#F5A200',
          },
          {
            busNumber: '720-3',
            busStation: '종합실험동',
            busTime: predictTime('laboratory', 'laboratory720-2bus', data),
            lastStation: leftStation('laboratory', 'laboratory720-2bus', data),
            busColor: '#6FB245',

            moreInfo: [
              `이전: ${beforeTime('laboratory', 'laboratory720-2bus', data) ?? "-"}`,
              `다음: ${nextTime('laboratory', 'laboratory720-2bus', data) ?? "-"}`,
            ],
          },
        ],
      },
      {
        header: '죽전역 출발',
        buses: [
          {
            busNumber: '셔틀버스',
            busStation: '죽전역',
            busTime: predictTime('jukjeonstation', 'jukjeonstationshuttlebus', data),
            lastStation: '',
            busColor: '#296bce',
            moreInfo: [
              `이전: ${beforeTime('jukjeonstation', 'jukjeonstationshuttlebus', data) ?? "-"}`,
              `다음: ${nextTime('jukjeonstation', 'jukjeonstationshuttlebus', data) ?? "-"}`,
            ],
          },
          {
            busNumber: '24',
            busStation: '죽전역정류장',
            busTime: predictTime('dankook_to_jukjeonstation', '24', data),
            lastStation: leftStation('dankook_to_jukjeonstation', '24', data),
            busColor: '#F5A200',
          },
          {
            busNumber: '720-3',
            busStation: '죽전역정류장',
            busTime: predictTime('jukjeonstation_to_dankook', '720-3', data),
            lastStation: leftStation('jukjeonstation_to_dankook', '720-3', data),
            busColor: '#6FB245',
          },
        ],
        hiddenContentShowLabel: '학교 앞까지만 가는 버스보기',
        hiddenContent: [
          {
            busNumber: '660',
            busStation: '죽전역정류장',
            busTime: predictTime('jukjeonstation_to_dankook', '660', data),
            lastStation: leftStation('jukjeonstation_to_dankook', '660', data),
            busColor: '#6FB245',
          },
          {
            busNumber: '26-1',
            busStation: '죽전역정류장',
            busTime: predictTime('jukjeonstation_to_dankook', '26-1', data),
            lastStation: leftStation('jukjeonstation_to_dankook', '26-1', data),
            busColor: '#F5A200',
          },
        ],
      },
      {
        header: '치과병원 > 곰상',
        buses: [
          {
            busNumber: '셔틀버스',
            busStation: '치과병원',
            busTime: predictTime('dankookdentalhospital', 'shuttle', data),
            lastStation: prevMin('dankookdentalhospital', 'shuttle', data),
            busColor: '#296bce',
            moreInfo: [
              `이전: ${beforeTime('dankookdentalhospital', 'shuttle', data) ?? "-"}`,
              `다음: ${nextTime('dankookdentalhospital', 'shuttle', data) ?? "-"}`,
            ],
          },
          {
            busNumber: '24',
            busStation: '치과병원',
            busTime: predictTime('dankookdentalhospital', '24', data),
            lastStation: leftStation('dankookdentalhospital', '24', data),
            busColor: '#F5A200',
          },
          {
            busNumber: '720-3',
            busStation: '치과병원',
            busTime: predictTime('dankookdentalhospital', '720-3', data),
            lastStation: leftStation('dankookdentalhospital', '720-3', data),
            busColor: '#6FB245',
          },
        ],
      },
      {
        header: '학교앞 > 죽전역',
        buses: [
          {
            busNumber: '24',
            busStation: '대지고.전내교차로',
            busTime: predictTime('daejihighschool', '24', data),
            lastStation: leftStation('daejihighschool', '24', data),
            busColor: '#F5A200',
          },
          {
            busNumber: '40',
            busStation: '대지고.전내교차로',
            busTime: predictTime('daejihighschool', '40', data),
            lastStation: leftStation('daejihighschool', '40', data),
            busColor: '#F5A200',
          },
          {
            busNumber: '26-1',
            busStation: '대지고.전내교차로',
            busTime: predictTime('daejihighschool', '26-1', data),
            lastStation: leftStation('daejihighschool', '26-1', data),
            busColor: '#F5A200',
          },
          {
            busNumber: '660',
            busStation: '대지고.전내교차로',
            busTime: predictTime('daejihighschool', '660', data),
            lastStation: leftStation('daejihighschool', '660', data),
            busColor: '#6FB245',
          },
        ],
      },
    ];
    

  }
 
   
};

// [{"busStation":"dojungstation","bus":{"85":{"predictTime":"8분 후","locationNo":"4째 전","leftMin":null,"prevMin":null,"nextTime":null,"beforeTime":null}}},{"busStation":"dojungstation","bus":{"5":{"predictTime":"40분 후","locationNo":"17째 전","leftMin":null,"prevMin":null,"nextTime":null,"beforeTime":null}}},{"busStation":"dojungstation","bus":{"5":{"predictTime":"21분 후","locationNo":"9째 전","leftMin":null,"prevMin":null,"nextTime":null,"beforeTime":null}}},{"busStation":"dojungstation","bus":{"2":{"predictTime":"28분 후","locationNo":"16째 전","leftMin":null,"prevMin":null,"nextTime":null,"beforeTime":null}}},{"busStation":"dojungstation","bus":{"14":{"predictTime":"20분 후","locationNo":"10째 전","leftMin":null,"prevMin":null,"nextTime":null,"beforeTime":null}}},{"busStation":"dojungstation","bus":{"2":{"predictTime":"15분 후","locationNo":"9째 전","leftMin":null,"prevMin":null,"nextTime":null,"beforeTime":null}}},{"busStation":"dojungstation","bus":{"20":{"predictTime":"24분 후","locationNo":"13째 전","leftMin":null,"prevMin":null,"nextTime":null,"beforeTime":null}}},{"busStation":"dojungstation","bus":{"81":{"predictTime":"20분 후","locationNo":"9째 전","leftMin":null,"prevMin":null,"nextTime":null,"beforeTime":null}}},{"busStation":"dojungstation","bus":{"14":{"predictTime":"6분 후","locationNo":"4째 전","leftMin":null,"prevMin":null,"nextTime":null,"beforeTime":null}}},{"busStation":"dankookmaingate","bus":{"11":{"predictTime":"10분 후","locationNo":"5째 전","leftMin":null,"prevMin":null,"nextTime":null,"beforeTime":null}}},{"busStation":"dankookmaingate","bus":{"11toDojung":{"predictTime":"13분 후","locationNo":"6째 전","leftMin":null,"prevMin":null,"nextTime":null,"beforeTime":null}}},{"busStation":"dankookmaingate","bus":{"11toDojung":{"predictTime":"3분 후","locationNo":"1째 전","leftMin":null,"prevMin":null,"nextTime":null,"beforeTime":null}}},{"busStation":"dankookhospital","bus":{"200":{"predictTime":"6분 후","locationNo":"8째 전","leftMin":null,"prevMin":null,"nextTime":null,"beforeTime":null}}},{"busStation":"dankookhospital","bus":{"120":{"predictTime":"2분 후","locationNo":"3째 전","leftMin":null,"prevMin":null,"nextTime":null,"beforeTime":null}}},{"busStation":"dankookhospital","bus":{"120":{"predictTime":"29분 후","locationNo":"29째 전","leftMin":null,"prevMin":null,"nextTime":null,"beforeTime":null}}},{"busStation":"dankookhospital","bus":{"201":{"predictTime":"23분 후","locationNo":"26째 전","leftMin":null,"prevMin":null,"nextTime":null,"beforeTime":null}}},{"busStation":"dankookhospital","bus":{"200":{"predictTime":"22분 후","locationNo":"25째 전","leftMin":null,"prevMin":null,"nextTime":null,"beforeTime":null}}},{"busStation":"cheonanstation","bus":{"7":{"predictTime":"17분 후","locationNo":"14째 전","leftMin":null,"prevMin":null,"nextTime":null,"beforeTime":null}}},{"busStation":"cheonanstation","bus":{"11":{"predictTime":"20분 후","locationNo":"13째 전","leftMin":null,"prevMin":null,"nextTime":null,"beforeTime":null}}},{"busStation":"cheonanstation","bus":{"500":{"predictTime":"34분 후","locationNo":"27째 전","leftMin":null,"prevMin":null,"nextTime":null,"beforeTime":null}}},{"busStation":"cheonanstation","bus":{"532":{"predictTime":"91분 후","locationNo":"73째 전","leftMin":null,"prevMin":null,"nextTime":null,"beforeTime":null}}},{"busStation":"cheonanstation","bus":{"7":{"predictTime":"7분 후","locationNo":"6째 전","leftMin":null,"prevMin":null,"nextTime":null,"beforeTime":null}}},{"busStation":"cheonanstation","bus":{"110":{"predictTime":"10분 후","locationNo":"9째 전","leftMin":null,"prevMin":null,"nextTime":null,"beforeTime":null}}},{"busStation":"cheonanstation","bus":{"200":{"predictTime":"9분 후","locationNo":"8째 전","leftMin":null,"prevMin":null,"nextTime":null,"beforeTime":null}}},{"busStation":"dojungstation11","bus":{"11":{"predictTime":"15분 후","locationNo":null,"leftMin":"15분 후","prevMin":"4분전\n출발했음","nextTime":"13시 32분  (15분 후)","beforeTime":"13시 13분  (4분 전)"}}},{"busStation":"cheonanstation","bus":{"shuttle":{"predictTime":null,"locationNo":null,"leftMin":null,"prevMin":"257분전\n출발했음","nextTime":null,"beforeTime":"9시 0분"}}},{"busStation":"dankooktocheonanstation","bus":{"shuttle":{"predictTime":"103분 후","locationNo":null,"leftMin":"103분 후","prevMin":null,"nextTime":"15시 0분","beforeTime":null}}},{"busStation":"dankooktodojungstation","bus":{"shuttle":{"predictTime":"103분 후","locationNo":null,"leftMin":"103분 후","prevMin":null,"nextTime":"15시 0분","beforeTime":null}}},{"busStation":"dojungstation","bus":{"shuttle":{"predictTime":null,"locationNo":null,"leftMin":null,"prevMin":"197분전\n출발했음","nextTime":null,"beforeTime":"10시 0분"}}}]
