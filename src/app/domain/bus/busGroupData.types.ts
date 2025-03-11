import {BusInfoUnitProps} from "@/app/temp-ui-lib/components/BusInfoUnit"

export type BusGroupData = {
  header: string;
  buses: BusInfoUnitProps[];
  hiddenContentShowLabel?: string;
  hiddenContent?: BusInfoUnitProps[];
};

