import React from 'react';
import '../styles/productsection.css';
import img1 from './images/product/Stretch-Film-Roll.jpg';
import img2 from './images/product/Shrink.jpg';
import img3 from './images/product/fmcg.jpg';
import img4 from './images/product/Agri.jpg';
import img5 from './images/product/PRO.jpg';
import img6 from './images/product/Untitled-55.jpg';

const products = [
  {
    name: 'Stretch film',
    image: img1,
    description:
      'Dependable load retention with excellent tear strength and stretch performance for everyday and demanding applications.',
    detail: 'Machine, hand, table, mini and jumbo rolls',
    alt: 'Clear stretch film rolls',
  },
  {
    name: 'Shrink film',
    image: img2,
    description:
      'Multi-purpose shrink films developed for industrial and consumer packaging, with strong seals and clear presentation.',
    detail: 'Bundling films and shrink sleeves',
    alt: 'Consumer products protected by shrink film',
  },
  {
    name: 'FMCG lamination film',
    image: img3,
    description:
      'Multi-layer films designed for reliable sealing on form-fill-seal lines, helping protect products through the supply chain.',
    detail: 'Available in a range of thicknesses and sizes',
    alt: 'Flexible film rolls for consumer packaging',
  },
  {
    name: 'Agricultural film',
    image: img4,
    description:
      'Film solutions that support modern farming by helping manage humidity, reduce weed growth and protect crop roots.',
    detail: 'Greenhouse, silage and mulch film',
    alt: 'Rows of crops growing with agricultural film',
  },
  {
    name: 'Protection film',
    image: img5,
    description:
      'Protective films for furniture, glass, metal and plastic surfaces during manufacturing, storage and transportation.',
    detail: 'Surface, scratch and corrosion protection options',
    alt: 'Protective film being applied to a surface',
  },
  {
    name: 'Custom-made films',
    image: img6,
    description:
      'Industrial-grade films tailored to your requirements, made using multi-layer co-extrusion and specialty masterbatches.',
    detail: 'Custom colors, sizes, thicknesses and properties',
    alt: 'A selection of custom colored film rolls',
  },
];

function ProductSection() {
  return (
    <section id="Product" className="product-section" aria-labelledby="products-heading">
      <div className="container">
        <div className="section-heading">
          <p className="section-eyebrow">Our product range</p>
          <h2 id="products-heading">The right film for every application</h2>
          <p>
            From protecting pallet loads to supporting crop growth, explore
            flexible film solutions made for the way your business works.
          </p>
        </div>
        <div className="row g-4">
          {products.map((product, index) => (
            <div className="col-sm-6 col-lg-4" key={product.name}>
              <article className="product-card">
                <div className="product-card-image">
                  <img src={product.image} alt={product.alt} loading="lazy" />
                  <span className="product-card-index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="product-card-content">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="product-card-detail">
                    <span aria-hidden="true">+</span>
                    {product.detail}
                  </div>
                  <a className="product-card-link" href="#ContactUs">
                    Discuss your requirements <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
