defmodule HelloWeb.ProductController do
  use HelloWeb, :controller

  alias Hello.Catalog
  alias Hello.Catalog.Product

  # list all products
  def index(conn, _params) do
    products = Catalog.list_products()
    render(conn, :index, products: products)
  end

  def new(conn, _params) do
    changeset = Catalog.change_product(%Product{})
    render(conn, :new, changeset: changeset)
  end

  def create(conn, %{"product" => product_params}) do
    case Catalog.create_product(product_params) do
      {:ok, product} ->
        conn
        |> put_flash(:info, "Product created successfully.")
        |> redirect(to: ~p"/products/#{product}")

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, :new, changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    product = Catalog.get_product!(id)
    render(conn, :show, product: product)
  end
end
