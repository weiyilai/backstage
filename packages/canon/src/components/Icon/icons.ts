/*
 * Copyright 2024 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// We can add custom icons to the list outside of Remix

import type { IconMap } from './types';
import {
  RiHeartFill,
  RiArrowDownFill,
  RiCloudFill,
  RiArrowLeftFill,
  RiArrowRightFill,
  RiArrowUpFill,
  RiDeleteBin6Line,
  RiAddLine,
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiArrowDownCircleLine,
  RiArrowLeftCircleLine,
  RiArrowRightCircleLine,
  RiArrowUpCircleLine,
} from '@remixicon/react';

// List of default icons
export const defaultIcons: IconMap = {
  arrowDown: RiArrowDownFill,
  arrowLeft: RiArrowLeftFill,
  arrowRight: RiArrowRightFill,
  arrowUp: RiArrowUpFill,
  arrowDownCircle: RiArrowDownCircleLine,
  arrowLeftCircle: RiArrowLeftCircleLine,
  arrowRightCircle: RiArrowRightCircleLine,
  arrowUpCircle: RiArrowUpCircleLine,
  chevronDown: RiArrowDownSLine,
  chevronUp: RiArrowUpSLine,
  chevronLeft: RiArrowLeftSLine,
  chevronRight: RiArrowRightSLine,
  cloud: RiCloudFill,
  heart: RiHeartFill,
  plus: RiAddLine,
  trash: RiDeleteBin6Line,
};