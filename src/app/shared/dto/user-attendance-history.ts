export interface UserAttendanceHistory {
  count: number;
  reports: Report[];
}

export interface Report {
  date: string;
}
