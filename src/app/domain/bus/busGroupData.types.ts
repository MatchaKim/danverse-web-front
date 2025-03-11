import {BusInfoUnitProps} from "@gorae-ui-local/components/BusInfoUnit"

export type BusGroupData = {
  header: string;
  buses: BusInfoUnitProps[];
  hiddenContentShowLabel?: string;
  hiddenContent?: BusInfoUnitProps[];
};

export interface BusInfoUnitProps {
  busNumber: string
  busStation: string
  busTime: string
  lastStation: string
  initialOpen?: boolean
  busColor?:string
  moreInfo?:string[]
}

