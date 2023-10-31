import { Activity } from '../models/activity';
import { ConsultingRole } from '../models/consultingRole';
import { Employee } from '../models/employee';
import {
  BillingOption,
  ContractType,
  InvoiceStatus,
  MilestoneStatus,
  RevenueType,
  UnitAmountOfWork,
} from '../models/HelperTypes';
import { Invoice } from '../models/invoice';
import { Invoicing } from '../models/invoicing';
import { Milestone } from '../models/milestone';
import { Order } from '../models/order';
import { TeamIteration } from '../models/teamIteration';
import { User } from '../models/user';
import { TargetActionsDefinition } from './models/rolesAndRights';

// ----------------------------------------------------------------------

export const mockTargetActionsDefinitions: TargetActionsDefinition[] = [
  { id: '0', name: '/list', actions: { canAccess: true } } as TargetActionsDefinition,
];

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const mockUsers: User = {
  id: '',
  msLocalAccountId: '326dc023-7fad-4437-b4c1-6b01164bd973',
  email: 'jbi@objektkultur.de',
  displayName: 'Jonathan Bittighofer',
  abbrevation: 'jbi',
  avatarUrl: '',
};

export const mockEmployee1: Employee = {
  id: '3056',
  msLocalAccountId: '326dc023-7fad-4437-b4c1-6b01164bd973',
  email: 'jbi@objektkultur.de',
  name: 'Jonathan Bittighofer',
  avatarUrl: 'https://api-prod-minimal-v4.vercel.app/assets/images/avatars/avatar_12.jpg',
  timeLink: 'https://okzeit.azurewebsites.net/',
  isActive: true,
};

export const mockEmployee2: Employee = {
  id: '3014',
  msLocalAccountId: '326dc023-7fad-4437-b4c1-6b01164bd973',
  email: 'mst@objektkultur.de',
  name: 'Moritz Staigl',
  avatarUrl: 'https://api-prod-minimal-v4.vercel.app/assets/images/avatars/avatar_12.jpg',
  timeLink: 'https://okzeit.azurewebsites.net/',
  isActive: true,
};

export const mockEmployee3: Employee = {
  id: '30548',
  msLocalAccountId: '326dc023-7fad-4437-b4c1-6b01164bd973',
  email: 'aho@objektkultur.de',
  name: 'Ahmet Hos',
  avatarUrl: 'https://api-prod-minimal-v4.vercel.app/assets/images/avatars/avatar_12.jpg',
  timeLink: 'https://okzeit.azurewebsites.net/',
  isActive: true,
};

export const mockEmployee4: Employee = {
  id: '45960',
  msLocalAccountId: '326dc023-7fad-4437-b4c1-6b01164bd973',
  email: 'vda@objektkultur.de',
  name: 'Vulong Dao',
  avatarUrl: 'https://api-prod-minimal-v4.vercel.app/assets/images/avatars/avatar_12.jpg',
  timeLink: 'https://okzeit.azurewebsites.net/',
  isActive: true,
};

export const mockActivitie1: Activity = {
  id: '12345',
  timeBookingId: '4596',
  teamIterationId: '028',
  invoiceDetailId: '924',
  consultingRoleId: '2898ce5c-1ecc-47f7-b9bd-f102ddfa6191',

  employee: mockEmployee1,
  workItemName: 'Prod Deployment',
  hoursToBill: 10,
  hoursBooked: 10,

  featureName: 'FeatureName1',
  featureNumber: '302',
};
export const mockActivitie2: Activity = {
  id: '123',
  timeBookingId: '4596',
  teamIterationId: '028',
  invoiceDetailId: '924',
  consultingRoleId: '8898ce9c-1ecc-47f7-b5bd-f102ddfa6191',

  employee: mockEmployee2,
  workItemName: 'Dev Deployment',
  hoursToBill: 20,
  hoursBooked: 20,

  featureName: 'FeatureName2',
  featureNumber: '302',
};
const mockActivitie3: Activity = {
  id: '12893',
  timeBookingId: '4596',
  teamIterationId: '028',
  invoiceDetailId: '924',
  consultingRoleId: '8298ce9c-1ecc-40f7-b5bd-f102ddfa3091',

  employee: mockEmployee3,
  workItemName: 'Stage Deployment',
  hoursToBill: 30,
  hoursBooked: 30,
  featureName: 'FeatureName3',
  featureNumber: '302',
};
const mockActivitie4: Activity = {
  id: '12345333',
  timeBookingId: '4596',
  teamIterationId: '028',
  invoiceDetailId: '924',
  consultingRoleId: '8898ce9c-1ecc-47f7-b5bd-f102ddfa6191',

  employee: mockEmployee4,
  workItemName: 'Bug fixing',
  hoursToBill: 40,
  hoursBooked: 40,

  featureName: 'FeatureName2',
  featureNumber: '302',
};
const mockActivitie5: Activity = {
  id: '32482',
  timeBookingId: '4596',
  teamIterationId: '028',
  invoiceDetailId: '924',
  consultingRoleId: '8898ce9c-1ecc-47f7-b5bd-f102ddfa6191',

  employee: mockEmployee2,
  workItemName: 'Design changes',
  hoursToBill: 50,
  hoursBooked: 50,

  featureName: 'FeatureName1',
  featureNumber: '302',
};

export const mockMilestone: Milestone = {
  id: '5934',
  name: 'TestMilestone',
  volume: 20,
  status: MilestoneStatus.Billed,
  dailyRateSold: 23,
  completedOn: new Date(),
};

export const mockOrder: Order = {
  id: '123',
  number: 'A105',
  name: 'OKPlattform',
  details: {
    owner: {
      id: '1234',
      name: 'Thomas Palt',
      email: 'dummy@gmail.com',
      avatarUrl: 'youtube.com',
      isActive: true,
      msLocalAccountId: '1234',
      timeLink: 'https://okzeit.azurewebsites.net/',
    },
    volume: {
      volume: 81243,
      remainingVolume: 21398,
      plannedVolume: 99363,
      billedVolume: 62554,
    },
    quantity: {
      plannedQuantity: 28266,
      billedQuantity: 74008,
      reaminingQuantity: 294783,
    },
    isActivityReportRequired: true,
  },
  customer: {
    id: '12334',
    name: 'Objektkultur Software GmbH',
    shortName: 'TC',
    targetCustomer: 'Objektkultur Software GmbH',
    number: '1234',
    internal: false,
  },
  contractType: ContractType.SupportContract,
};

export const mockConsultingRoles: ConsultingRole[] = [
  {
    id: '8898ce9c-1ecc-47f7-b5bd-f102ddfa6191',
    orderId: 'Hic et dicta.',
    name: 'Project Leader',
    rate: 1000,
    customerOrderNumber: 'Error expedita assumenda tempora deserunt.',
  },
  {
    id: '8298ce9c-1ecc-40f7-b5bd-f102ddfa3091',
    orderId: 'Hic et dicta.',
    name: 'Consultant',
    rate: 800,
    customerOrderNumber: 'Error expedita assumenda tempora deserunt.',
  },
  {
    id: '2898ce5c-1ecc-47f7-b9bd-f102ddfa6191',
    orderId: 'Hic et dicta.',
    name: 'Developer',
    rate: 500,
    customerOrderNumber: 'Error expedita assumenda tempora deserunt.',
  },
];

export const mockTeamIteration: TeamIteration = {
  id: '3920',
  teamName: 'OKPlattform',
  name: 'TeamIteration 01.01.2023 - 03.03.2023',
  devOpsPath: '/path',
  startDate: new Date(),
  endDate: new Date(),
};

export const mockInvoice1: Invoice = {
  id: '103948275896',
  invoiceNumber: '2940',
  totalPrice: 5000,
  details: [
    {
      id: '789',
      teamIterationId: '2110',
      milestoneId: '3583',
      revenueType: RevenueType.Performance,
      unitAmountOfWork: UnitAmountOfWork.ManDays,
      activities: [mockActivitie1],
      description: 'Leistung Consultant Jonathan Bittighofer vom 01.01.2023 bis zum 03.03.2023',
      positionNumber: '56',
      customerOrderNumber: '59246',
      quantity: 20,
      pricePerUnit: 700,
      totalPrice: 1000,
    },
    {
      id: '78933',
      teamIterationId: '2110',
      milestoneId: '3583',
      revenueType: RevenueType.Performance,
      unitAmountOfWork: UnitAmountOfWork.ManDays,
      activities: [mockActivitie2],
      description: 'Leistung Consultant Moritz Staigl vom 01.01.2023 bis zum 03.03.2023',
      positionNumber: '56',
      customerOrderNumber: '40683',
      quantity: 40,
      pricePerUnit: 500,
      totalPrice: 1000,
    },
    {
      id: '7894422',
      teamIterationId: '2110',
      milestoneId: '3583',
      revenueType: RevenueType.Performance,
      unitAmountOfWork: UnitAmountOfWork.ManDays,
      activities: [mockActivitie3],
      description: 'Leistung Consultant Ahmet Hos vom 01.01.2023 bis zum 03.03.2023',
      positionNumber: '56',
      customerOrderNumber: '10596',
      quantity: 20,
      pricePerUnit: 1000,
      totalPrice: 1000,
    },
    {
      id: '78944',
      teamIterationId: '2110',
      milestoneId: '3583',
      revenueType: RevenueType.Performance,
      unitAmountOfWork: UnitAmountOfWork.ManDays,
      activities: [mockActivitie4, mockActivitie5],
      description: 'Leistung Consultant Vulong Dao vom 01.01.2023 bis zum 03.03.2023',
      positionNumber: '56',
      customerOrderNumber: '60392',
      quantity: 20,
      pricePerUnit: 200,
      totalPrice: 1000,
    },
  ],
};

export const mockInvoice2: Invoice = {
  id: '10323827123596',
  invoiceNumber: '2940',
  totalPrice: 10000,
  details: [
    {
      id: '790',
      teamIterationId: '2110',
      milestoneId: '3283',
      revenueType: RevenueType.Performance,
      unitAmountOfWork: UnitAmountOfWork.ManDays,
      activities: [],
      description: 'Leistung Consultant Stefan Arndt vom 01.01.2023 bis zum 03.03.2023',
      positionNumber: '26',
      customerOrderNumber: '542146',
      quantity: 20,
      pricePerUnit: 700,
      totalPrice: 1000,
    },
    {
      id: '78933',
      teamIterationId: '2110',
      milestoneId: '3583',
      revenueType: RevenueType.Performance,
      unitAmountOfWork: UnitAmountOfWork.ManDays,
      activities: [],
      description: 'Leistung Consultant Moritz Staigl vom 01.01.2023 bis zum 03.03.2023',
      positionNumber: '56',
      customerOrderNumber: '40683',
      quantity: 40,
      pricePerUnit: 500,
      totalPrice: 1000,
    },
    {
      id: '7894422',
      teamIterationId: '2110',
      milestoneId: '3583',
      revenueType: RevenueType.Performance,
      unitAmountOfWork: UnitAmountOfWork.ManDays,
      activities: [],
      description: 'Leistung Consultant Ahmet Hos vom 01.01.2023 bis zum 03.03.2023',
      positionNumber: '56',
      customerOrderNumber: '10596',
      quantity: 20,
      pricePerUnit: 1000,
      totalPrice: 1000,
    },
    {
      id: '78944',
      teamIterationId: '2110',
      milestoneId: '3583',
      revenueType: RevenueType.Performance,
      unitAmountOfWork: UnitAmountOfWork.ManDays,
      activities: [],
      description: 'Leistung Consultant Vulong Dao vom 01.01.2023 bis zum 03.03.2023',
      positionNumber: '56',
      customerOrderNumber: '60392',
      quantity: 20,
      pricePerUnit: 200,
      totalPrice: 1000,
    },
  ],
};

export const mockInvoicing: Invoicing = {
  id: 'fad5808e-847a-4941-a087-ff2b98e540f5',
  invoices: [mockInvoice1],
  order: mockOrder,
  consultingRoles: mockConsultingRoles,
  status: InvoiceStatus.Planned,

  teamIteration: mockTeamIteration,
  milestone: mockMilestone,
  name: 'TeamIteration 01.01.2023 - 03.03.2023',
  currentTarget: {
    billedVolume: 3000,
    plannedVolume: 7000,
    billedQuantity: 20,
    plannedQuantity: 100,
  },
  billingOption: BillingOption.User,
  plannedInvoicedOn: new Date(),
  businessUnit: 'BusinessUnit',
  billingAmount: 10000,
  totalPrice: 10000,
};

export const mockInvoicings: Invoicing[] = [
  {
    id: 'fad5808e-847a-4941-a087-ff2b98e540f5',
    invoices: [],
    order: mockOrder,
    consultingRoles: mockConsultingRoles,
    status: InvoiceStatus.Planned,

    teamIteration: mockTeamIteration,
    milestone: mockMilestone,
    name: 'TeamIteration 01.01.2023 - 03.03.2023',
    currentTarget: {
      billedVolume: 3000,
      plannedVolume: 7000,
      billedQuantity: 20,
      plannedQuantity: 100,
    },
    billingOption: BillingOption.User,
    plannedInvoicedOn: new Date(),
    businessUnit: 'BusinessUnit',
    billingAmount: 0,
    totalPrice: 10000,
  },
  {
    id: 'fad5808e-847a-4941-a087-ff2b98e540f6',
    invoices: [],
    order: mockOrder,
    consultingRoles: mockConsultingRoles,

    status: InvoiceStatus.Planned,

    teamIteration: mockTeamIteration,
    milestone: mockMilestone,
    name: 'TeamIteration 04.04.2023 - 07.07.2023',
    currentTarget: {
      billedVolume: 5000,
      plannedVolume: 5000,
      billedQuantity: 40,
      plannedQuantity: 80,
    },
    billingOption: BillingOption.User,
    plannedInvoicedOn: new Date(),
    businessUnit: 'BusinessUnit',
    billingAmount: 0,
    totalPrice: 10000,
  },
];
