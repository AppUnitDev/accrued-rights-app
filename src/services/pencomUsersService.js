const KEYS = {
  pencomusers: 'pencomusers',
  pencusersId: 'pencomuserId',
};

export const getDepartmentCollection = () => [
  { id: '1', title: 'Information and Communication' },
  { id: '2', title: 'Procurement' },
  { id: '3', title: 'Corporate Communication' },
  { id: '4', title: 'Human Capital Development' },
  { id: '5', title: 'Micro Pension' },
  { id: '6', title: 'Investment Supervision' },
];

export const getUserRoleCollection = () => [
  { id: '1', title: 'Administrator' },
  { id: '2', title: 'Access1' },
  { id: '3', title: 'Access2' },
  { id: '4', title: 'Acces3' },
  { id: '5', title: 'Access4' },
  { id: '6', title: 'Acces5' },
];

export const getPFARole = () => [
  { id: '1', title: 'Pension Fund Administrator' },
  { id: '2', title: 'CBRD Administrator' },
];

export function insertPencomUser(data) {
  let pencomusers = getAllPencomUsers();
  data['id'] = generatePencomUserId();
  pencomusers.push(data);
  localStorage.setItem(KEYS.pencomusers, JSON.stringify(pencomusers));
}
export function updatePencomUser(data) {
  let pencomusers = getAllPencomUsers();
  let recordIndex = pencomusers.findIndex((x) => x.id == data.id);
  pencomusers[recordIndex] = { ...data };
  localStorage.setItem(KEYS.pencomusers, JSON.stringify(pencomusers));
}
export function deletePencomUser(id) {
  let pencomusers = getAllPencomUsers();
  pencomusers = pencomusers.filter((x) => x.id != id);
  localStorage.setItem(KEYS.pencomusers, JSON.stringify(pencomusers));
}
export function generatePencomUserId() {
  if (localStorage.getItem(KEYS.pencusersId) == null)
    localStorage.setItem(KEYS.pencusersId, '0');
  var id = parseInt(localStorage.getItem(KEYS.pencusersId));
  localStorage.setItem(KEYS.pencusersId, (++id).toString());
  return id;
}

export function getAllPencomUsers() {
  if (localStorage.getItem(KEYS.pencomusers) == null)
    localStorage.setItem(KEYS.pencomusers, JSON.stringify([]));
  let pencomusers = JSON.parse(localStorage.getItem(KEYS.pencomusers));
  //map departmentID to department title
  let departments = getDepartmentCollection();
  return pencomusers.map((x) => ({
    ...x,
    department: departments[x.id - 1].title,
  }));
}
