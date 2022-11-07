<script>
import Layout from "../../layouts/main.vue";
import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";

/**
 * Dashboard Component
 */
export default {
  page: {
    title: "Quản lý đơn hàng tạo theo file",
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
      title: "Quản lý đơn hàng tạo theo file",
      items: [
        {
          text: "Quản lý đơn hàng",
          href: "#",
        },
        {
          text: "Quản lý đơn hàng tạo theo file",
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
                <div class="card-content border-bottom border-black p-2">
                  <h5 class="card-title">Danh sách file đơn hàng</h5>
                </div>
                <div class="card-content border-bottom border-black p-2">
                  <h5 class="card-title">Chưa có file đơn hàng được tạo</h5>
                </div>
                <div class="clearfix"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-9 animated fadeInRight">
          <div class="card mail-box-header">
            <div class="card-body">
              <h2 class="card-title">Quản lý đơn hàng tạo theo file</h2>
              <div class="row">
                <div
                  class="float-left d-flex mail-search mt-3"
                  style="float: left"
                >
                  <button
                    class="btn btn-outline-danger me-2"
                    name="export_excel"
                  >
                    <i class="fa fa-print"></i>
                    In Bill
                  </button>
                  <button class="btn btn-outline-success" name="export_excel">
                    <i class="fa fa-file-excel"></i>

                    Xuất Excel
                  </button>
                </div>
              </div>
              <div class="row">
                <div class="mail-box mt-3">
                  <div
                    id="DataTables_Table_0_wrapper"
                    class="dataTables_wrapper dt-bootstrap4 no-footer"
                  >
                    <div class="top">
                      <div
                        class="dataTables_info"
                        id="DataTables_Table_0_info"
                        role="status"
                        aria-live="polite"
                      >
                        Hiển thị kết quả từ 0 đến 0 của 0 bản ghi
                      </div>
                    </div>
                    <table
                      class="
                        table table-hover table_detail_file_id
                        no-footer
                        dataTable
                      "
                      id="DataTables_Table_0"
                      aria-describedby="DataTables_Table_0_info"
                      role="grid"
                    >
                      <thead> 
                        <tr role="row">
                          <th
                            class="sorting_disabled"
                            rowspan="1"
                            colspan="1"
                            style="width: 33px"
                          >
                            #
                          </th>
                          <th
                            class="sorting_disabled"
                            rowspan="1"
                            colspan="1"
                            style="width: 275px"
                          >
                            Đơn hàng
                          </th>
                          <th
                            class="sorting_disabled"
                            rowspan="1"
                            colspan="1"
                            style="width: 226px"
                          >
                            Người nhận &amp; địa chỉ
                          </th>
                          <th
                            class="sorting_disabled"
                            rowspan="1"
                            colspan="1"
                            style="width: 178px"
                          >
                            Kích thước &amp; Giá trị
                          </th>
                          <th
                            class="sorting_disabled"
                            rowspan="1"
                            colspan="1"
                            style="width: 178px"
                          >
                            Mô tả
                          </th>
                        </tr>
                      </thead>
                      <tbody id="body_detail_file_id">
                        <tr class="odd">
                          <td valign="top" colspan="5" class="dataTables_empty">
                            Không có dữ liệu
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div class="bottom">
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
                              >Trang trước</a
                            >
                          </li>
                          <li
                            class="paginate_button page-item next disabled"
                            id="DataTables_Table_0_next"
                          >
                            <a
                              href="#"
                              aria-controls="DataTables_Table_0"
                              data-dt-idx="1"
                              tabindex="0"
                              class="page-link"
                              >Trang sau</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="clear"></div>
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
