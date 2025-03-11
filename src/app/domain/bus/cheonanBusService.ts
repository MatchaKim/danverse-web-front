import { busApi } from "@/app/api/busApi";
import { BusGroupData } from "./busGroupData.types";
import { BusApiStation } from "@/app/api/busApi.types";
import {
  predictTime,
  prevMin,
  nextTime,
  beforeTime,
  leftStation,
} from "@/app/domain/bus/busInfo.utils.deprecated";

export const cheonanBusService = {
  getCheonanBusInfo: async (): Promise<BusGroupData[]> => {
    const data: BusApiStation[] = await busApi.getCheonanBusInfo();

    return [
      {
        header: "학교 출발",
        buses: [
          {
            // 셔틀 - 두정역
            busNumber: "셔틀버스 - 두정역",
            busStation: "학생회관 앞",
            busTime: predictTime("dankooktodojungstation", "shuttle", data),
            lastStation: prevMin("dankooktodojungstation", "shuttle", data),
            busColor: "#296bce",
            moreInfo: [
              `이전: ${beforeTime("dankooktodojungstation", "shuttle", data) ?? "-"}`,
              `다음: ${nextTime("dankooktodojungstation", "shuttle", data) ?? "-"}`,
            ],
          },
          {
            // 11번 - 두정역
            busNumber: "11번 - 두정역",
            busStation: "단국대입구",
            busTime: predictTime("dankookmaingate", "11toDojung", data),
            lastStation: leftStation("dankookmaingate", "11toDojung", data),
            busColor: "#6FB245",
          },
          {
            // 셔틀 - 천안터미널
            busNumber: "셔틀버스 - 천안터미널",
            busStation: "학생회관 앞",
            busTime: predictTime("dankooktocheonanstation", "shuttle", data),
            lastStation: leftStation("dankooktocheonanstation", "shuttle", data),
            busColor: "#296bce",
            moreInfo: [
              `이전: ${beforeTime("dankooktocheonanstation", "shuttle", data) ?? "-"}`,
              `다음: ${nextTime("dankooktocheonanstation", "shuttle", data) ?? "-"}`,
            ],
          },
          {
            // 11번 - 천안역
            busNumber: "11번 - 천안역",
            busStation: "단국대입구",
            busTime: predictTime("dankookmaingate", "11", data),
            lastStation: leftStation("dankookmaingate", "11", data),
            busColor: "#6FB245",
          },
          {
            // 200번
            busNumber: "200번",
            busStation: "단국대학교병원",
            busTime: predictTime("dankookhospital", "200", data),
            lastStation: leftStation("dankookhospital", "200", data),
            busColor: "#6FB245",
          },
          {
            // 201번
            busNumber: "201번",
            busStation: "단국대학교병원",
            busTime: predictTime("dankookhospital", "201", data),
            lastStation: leftStation("dankookhospital", "201", data),
            busColor: "#6FB245",
          },
        ],
      },
      {
        header: "두정역 출발",
        buses: [
          {
            // 셔틀버스
            busNumber: "셔틀버스",
            busStation: "두정역 셔틀승강장",
            busTime: predictTime("dojungstation", "shuttle", data),
            lastStation: prevMin("dojungstation", "shuttle", data),
            busColor: "#296bce",
            moreInfo: [
              `이전: ${beforeTime("dojungstation", "shuttle", data) ?? "-"}`,
              `다음: ${nextTime("dojungstation", "shuttle", data) ?? "-"}`,
            ],
          },
          {
            // 11번
            busNumber: "11번",
            busStation: "두정역",
            busTime: predictTime("dojungstation11", "11", data),
            lastStation: prevMin("dojungstation11", "11", data),
            busColor: "#6FB245",
            moreInfo: [
              `이전: ${beforeTime("dojungstation11", "11", data) ?? "-"}`,
              `다음: ${nextTime("dojungstation11", "11", data) ?? "-"}`,
            ],
          },
          {
            // 14번
            busNumber: "14번",
            busStation: "두정역",
            busTime: predictTime("dojungstation", "14", data),
            lastStation: leftStation("dojungstation", "14", data),
            busColor: "#6FB245",
          },
          {
            // 20번
            busNumber: "20번",
            busStation: "두정역",
            busTime: predictTime("dojungstation", "20", data),
            lastStation: leftStation("dojungstation", "20", data),
            busColor: "#6FB245",
          },
        ],
      },
      {
        header: "천안역 출발",
        buses: [
          {
            // 셔틀버스
            busNumber: "셔틀버스",
            busStation: "세기보청기 앞",
            busTime: predictTime("cheonanstation", "shuttle", data),
            lastStation: leftStation("cheonanstation", "shuttle", data),
            busColor: "#296bce",
            moreInfo: [
              `이전: ${beforeTime("cheonanstation", "shuttle", data) ?? "-"}`,
              `다음: ${nextTime("cheonanstation", "shuttle", data) ?? "-"}`,
            ],
          },
          {
            // 11번
            busNumber: "11번",
            busStation: "천안역",
            busTime: predictTime("cheonanstation", "11", data),
            lastStation: leftStation("cheonanstation", "11", data),
            busColor: "#6FB245",
          },
        ],
      },
    ];
  },
};
