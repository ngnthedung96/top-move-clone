<script>
import Layout from "../../layouts/main.vue";
import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";

/**
 * Dashboard Component
 */
export default {
  page: {
    title: "Quản lý phản hồi đơn hàng",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: {
    Layout,
    PageHeader,
  },
  data() {
    return {
      title: "Quản lý phản hồi đơn hàng",
      items: [
        {
          text: "Quản lý đơn hàng",
          href: "#",
        },
        {
          text: "Quản lý phản hồi đơn hàng",
          active: true,
        },
      ],
      showModal: false,
      isLoading: false,
      fullPage: true,
      canCancel: false,
      useSlot: false,
      loader: "spinner",
      color: "#007bff",
      bgColor: "#ffffff",
      height: 128,
      width: 128,
      timeout: 3000, //ms
      fetchingStats: true,
      earningStatus: true,
    };
  },
};
</script>

<template>
  <Layout>
    <div class="row wrapper border-bottom white-bg page-heading">
      <PageHeader :title="title" :items="items" />
    </div>
    <div class="wrapper wrapper-content">
      <div class="row">
        <div class="col-lg-3">
          <div class="card">
            <div class="card-body mailbox-content">
              <div class="file-manager">
                <h5 class="card-title">BỘ LỌC</h5>
                <ul
                  class="folder-list m-b-md"
                  style="padding: 0px; list-style: none"
                  id="load_static_notification"
                >
                  <!-- <li><a id="total"> <i class="fa fa-clock-o"></i> Tất cả <span class="label label-warning float-right" >2</span></a></li> -->
                  <li>
                    <a
                      id="new"
                      class="
                        d-flex
                        flex-row
                        justify-content-between
                        py-2
                        border-bottom border-black
                        text-black
                      "
                    >
                      <i
                        class="
                          fa fa-plus
                          d-flex
                          flex-column
                          justify-content-center
                        "
                        aria-hidden="true"
                      ></i>
                      <span class="d-flex flex-column justify-content-center">
                        Chưa xử lý
                      </span>
                      <span class="px-2 py-1 bg-primary rounded text-white"
                        >2</span
                      >
                    </a>
                  </li>
                  <li>
                    <a
                      id="accept"
                      class="
                        d-flex
                        flex-row
                        justify-content-between
                        py-2
                        border-bottom border-black
                        text-black
                      "
                    >
                      <i
                        class="
                          fa fa-check
                          d-flex
                          flex-column
                          justify-content-center
                        "
                        aria-hidden="true"
                      ></i>
                      <span class="d-flex flex-column justify-content-center">
                        Đã chấp nhận
                      </span>
                      <span class="px-2 py-1 bg-success rounded text-white"
                        >0</span
                      ></a
                    >
                  </li>
                  <li>
                    <a
                      id="reject"
                      class="
                        d-flex
                        flex-row
                        justify-content-between
                        py-2
                        border-bottom border-black
                        text-black
                      "
                      ><i
                        class="
                          fa fa-window-close
                          d-flex
                          flex-column
                          justify-content-center
                        "
                        aria-hidden="true"
                      ></i>
                      <span class="d-flex flex-column justify-content-center">
                        Đã từ chối
                      </span>
                      <span class="px-2 py-1 bg-danger rounded text-white"
                        >0</span
                      ></a
                    >
                  </li>
                  <!-- <li><a  id="agr"><i class="fa fa-handshake-o" aria-hidden="true"></i></i> Đồng thuận <span class="label label-danger float-right" >0</span></a></li>
<li><a  id="un_agr"><i class="fa fa-ban" aria-hidden="true"></i></i> Không đồng thuận<span class="label label-muted float-right" ></span></a></li> -->
                </ul>
                <div class="clearfix"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-9 animated fadeInRight">
          <div class="card mail-box-header">
            <div class="card-body">
              <h2 class="card-title">Quản lý phản hồi đơn hàng</h2>
              <div class="float-left mail-search" style="float: left">
                <button
                  class="form-control buttons-excel btn btn-outline btn-success"
                  name="export_excel"
                >
                  <i class="fa fa-file-excel" aria-hidden="true"></i> Xuất Excel
                </button>
              </div>

              <div class="row conditional" style="float: right">
                <div class="col-lg-12">
                  <b-tabs pills>
                    <b-tab title="Tất cả"></b-tab>
                    <b-tab title="Sửa COD"></b-tab>
                    <b-tab title="Sửa người nhận"></b-tab>
                    <b-tab title="Khiếu nại"></b-tab>
                    <b-tab title="Phát lại"></b-tab>
                    <b-tab title="Hoàn đơn"></b-tab>
                    <b-tab title="Khác"></b-tab>
                  </b-tabs>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="mail-box">
                <p id="msg_err" style="display: none"></p>
                <div
                  id="DataTables_Table_0_wrapper"
                  class="dataTables_wrapper dt-bootstrap4 no-footer"
                >
                  <div
                    id="DataTables_Table_0_filter"
                    style="float: left"
                    class="dataTables_filter"
                  >
                    <label style="position: relative; top: 0; left: -55%"
                      >Tìm kiếm:
                    </label>
                    <input
                      type="search"
                      class="form-control form-control-sm"
                      placeholder=""
                      aria-controls="DataTables_Table_0"
                    />
                  </div>
                  <div class="float-left"></div>
                  <div class="float-right"></div>
                  <table
                    class="
                      table table-hover table-mail table_feelback
                      dataTable
                      no-footer
                    "
                    id="DataTables_Table_0"
                    role="grid"
                    aria-describedby="DataTables_Table_0_info"
                  >
                    <thead>
                      <tr role="row">
                        <th
                          class="sorting_asc"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          style="width: 30px"
                          aria-sort="ascending"
                          aria-label="#: activate to sort column descending"
                        >
                          #
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          style="width: 178px"
                          aria-label="Đơn hàng: activate to sort column ascending"
                        >
                          Đơn hàng
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          style="width: 204px"
                          aria-label="phản hồi khách hàng: activate to sort column ascending"
                        >
                          phản hồi khách hàng
                        </th>
                        <th
                          class="sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          style="width: 151px"
                          aria-label="nội dung trả lời: activate to sort column ascending"
                        >
                          nội dung trả lời
                        </th>
                        <th
                          style="min-width: 200px; width: 184px"
                          class="sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          aria-label="Trạng thái phản hồi: activate to sort column ascending"
                        >
                          Trạng thái phản hồi
                        </th>
                        <th
                          style="min-width: 150px; width: 134px"
                          class="sorting"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          rowspan="1"
                          colspan="1"
                          aria-label="NV phản hồi: activate to sort column ascending"
                        >
                          NV phản hồi
                        </th>
                      </tr>
                    </thead>
                    <tbody id="load_data_notification">
                      <tr role="row" class="odd">
                        <td class="sorting_1">1</td>
                        <td>
                          <label class="btn btn-danger">HH9925613101</label
                          ><br />
                        </td>
                        <td>
                          <label class="btn btn-primary">Sửa COD</label><br />
                          <hr />
                          COD: 0 -&gt; 200000
                        </td>
                        <td></td>
                        <td>
                          <label class="label label-info">Tạo mới</label><br />
                          <div style="overflow: hidden">
                            <span class="text-success" style="float: left"
                              >Tạo: </span
                            ><span class="float-right" style="float: right"
                              ><strong>14-06-2022 11:02</strong></span
                            >
                          </div>
                          <div style="overflow: hidden">
                            <span class="text-success" style="float: left"
                              >Phản hồi: </span
                            ><span class="float-right" style="float: right"
                              ><strong>N/A</strong></span
                            >
                          </div>
                        </td>
                        <td><strong></strong></td>
                      </tr>
                      <tr role="row" class="even">
                        <td class="sorting_1">2</td>
                        <td>
                          <label class="btn btn-danger">HH2455613801</label
                          ><br />
                        </td>
                        <td>
                          <label class="btn btn-primary">Sửa Người Nhận</label
                          ><br />
                          <hr />
                          Tên: tu -&gt; TestApp<br />Khối lượng : 1 -&gt; 5
                        </td>
                        <td></td>
                        <td>
                          <label class="label label-info">Tạo mới</label><br />
                          <div style="overflow: hidden">
                            <span class="text-success" style="float: left"
                              >Tạo: </span
                            ><span class="float-right" style="float: right"
                              ><strong>14-06-2022 11:02</strong></span
                            >
                          </div>
                          <div style="overflow: hidden">
                            <span class="text-success" style="float: left"
                              >Phản hồi: </span
                            ><span class="float-right" style="float: right"
                              ><strong>N/A</strong></span
                            >
                          </div>
                        </td>
                        <td><strong></strong></td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="row">
                    <div class="col-sm-4">
                      <div
                        class="dataTables_info"
                        id="DataTables_Table_0_info"
                        role="status"
                        aria-live="polite"
                      >
                        Hiển thị kết quả từ 1 đến 2 của 2 bản ghi
                      </div>
                    </div>
                    <div class="col-sm-4"></div>
                    <div class="col-sm-4">
                      <div
                        class="dataTables_paginate paging_simple_numbers"
                        id="DataTables_Table_0_paginate"
                      >
                        <ul class="pagination">
                          <li
                            class="paginate_button page-item previous disabled"
                            id="DataTables_Table_0_previous"
                          >
                            <a
                              href="#"
                              aria-controls="DataTables_Table_0"
                              data-dt-idx="0"
                              tabindex="0"
                              class="page-link"
                              >Trước</a
                            >
                          </li>
                          <li class="paginate_button page-item active">
                            <a
                              href="#"
                              aria-controls="DataTables_Table_0"
                              data-dt-idx="1"
                              tabindex="0"
                              class="page-link"
                              >1</a
                            >
                          </li>
                          <li
                            class="paginate_button page-item next disabled"
                            id="DataTables_Table_0_next"
                          >
                            <a
                              href="#"
                              aria-controls="DataTables_Table_0"
                              data-dt-idx="2"
                              tabindex="0"
                              class="page-link"
                              >Sau</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
