export interface GetDepartmentsRequest {
  _page?: number | string;
  _limit?: number | string;
  _sort?: string;
  _order?: string;
  q?: string;
}

export interface DepartmentItem {
  id: number;
  department_name: string;
  department_slug: string;
  department_description: string;
  icon_url: string;
  parent_id: number;
  childrens: DepartmentItem[];
}

export type GetDepartmentsReponse = DepartmentItem[];
