// Data from Firebase.

const forHim = [
  // FOR HIM:
  {
    name: 'Wallet',
    price: '140$',
    images: ['https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279992/Handcrafted/for-him/wallet/wallet2_yjqtmn.png',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279992/Handcrafted/for-him/wallet/wallet1_pagtsp.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279992/Handcrafted/for-him/wallet/wallet3_goywci.jpg'],
    description: 'Wallet Lorem ipsum dolor sit amet elit. Quis iure eligendi ab, nulla adipisci quos sit molestias, laborum beatae tempore a aspernatur quo laboriosam velit amet, ipsam vitae hic impedit!',
    inStock: true
  },
  {
    name: 'Scandinavian Swetaer',
    price: '100$',
    images: ['https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279991/Handcrafted/for-him/sweater/sweater2_mxdgdh.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279991/Handcrafted/for-him/sweater/sweater3_hlc2pl.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279990/Handcrafted/for-him/sweater/sweater1_qe2mkv.jpg'],
    description: 'Sweater Lorem ipsum dolor sit amet elit. Quis iure eligendi ab, nulla adipisci quos sit molestias, laborum beatae tempore a aspernatur quo laboriosam velit amet, ipsam vitae hic impedit!',
    inStock: true
  },
  {
    name: 'Fancy Cap',
    price: '35$',
    images: [
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279991/Handcrafted/for-him/cap/cap_lsgyxf.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279989/Handcrafted/for-him/cap/cap2_wahrto.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279989/Handcrafted/for-him/cap/cap1_ytjzme.jpg'
    ],
    description: 'This fancy cap Lorem ipsum dolor sit amet elit. Quis iure eligendi ab, nulla adipisci quos sit molestias, laborum beatae tempore a aspernatur quo laboriosam velit amet, ipsam vitae hic impedit!',
    inStock: true
  },
  {
    name: 'Wool socks',
    price: '25$',
    images: ['https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279990/Handcrafted/for-him/socks/socks1_kz6gcz.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279990/Handcrafted/for-him/socks/socks2_cjaei1.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279990/Handcrafted/for-him/socks/socks3_xrjzzr.jpg'],
    description: 'Socks Lorem ipsum dolor sit amet elit. Quis iure eligendi ab, nulla adipisci quos sit molestias, laborum beatae tempore a aspernatur quo laboriosam velit amet, ipsam vitae hic impedit!',
    inStock: true
  },
  {
    name: 'Gloves',
    price: '35$',
    images: ['https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279992/Handcrafted/for-him/gloves/gloves3_iohhxa.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279990/Handcrafted/for-him/gloves/gloves2_r3e0dt.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279990/Handcrafted/for-him/gloves/gloves1_kdyoah.jpg'],
    description: 'Gloves Lorem ipsum dolor sit amet elit. Quis iure eligendi ab, nulla adipisci quos sit molestias, laborum beatae tempore a aspernatur quo laboriosam velit amet, ipsam vitae hic impedit!',
    inStock: true
  },
  {
    name: 'Custom T-shirt',
    price: '40$',
    images: ['https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279991/Handcrafted/for-him/tshirt/tshirt2_htjdzd.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279991/Handcrafted/for-him/tshirt/tshirt1_psuycy.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279991/Handcrafted/for-him/tshirt/tshirt3_cqhniu.jpg'],
    description: 'T-shirt Lorem ipsum dolor sit amet elit. Quis iure eligendi ab, nulla adipisci quos sit molestias, laborum beatae tempore a aspernatur quo laboriosam velit amet, ipsam vitae hic impedit!',
    inStock: true
  },
]



// FOR HER:
const forHer = [
  {
    name: 'Colorful beds',
    price: '30$',
    images: ['https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279889/Handcrafted/for-her/beads/beads1_tzw3fh.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279889/Handcrafted/for-her/beads/beads3_iggevu.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279888/Handcrafted/for-her/beads/beads2_lugjug.jpg'],
    description: ' Quis iure eligendi ab, Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla adipisci quos sit molestias, laborum beatae tempore a aspernatur quo laboriosam velit amet, ipsam vitae hic impedit!',
    inStock: true
  },
  {
    name: 'Maroccan purse',
    price: '65$',
    images: ['https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279891/Handcrafted/for-her/purse/purse1_x3eqfc.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279891/Handcrafted/for-her/purse/purse2_j6mf98.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279890/Handcrafted/for-her/purse/purse3_l5auan.jpg'],
    description: 'Dolor sit amet consectetur adipisicing elit. Quis iure eligendi ab, nulla adipisci quos sit molestias, laborum beatae tempore a aspernatur quo laboriosam velit amet, ipsam vitae hic impedit!',
    inStock: true
  },
  {
    name: 'Wallet',
    price: '140$',
    images: ['https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279890/Handcrafted/for-her/ladywallet/wallet3_uy4gcf.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279889/Handcrafted/for-her/ladywallet/wallet2_tefjbl.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279889/Handcrafted/for-her/ladywallet/wallet1_zxqgwp.jpg'],
    description: 'Wallet Lorem ipsum dolor sit amet elit. Quis iure eligendi ab, nulla adipisci quos sit molestias, laborum beatae tempore a aspernatur quo laboriosam velit amet, ipsam vitae hic impedit!',
    inStock: true
  },
  {
    name: 'Leather bag',
    price: '170$',
    images: ['https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279889/Handcrafted/for-her/bag/bag3_g1ltky.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279888/Handcrafted/for-her/bag/bag2_r3u4j5.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279888/Handcrafted/for-her/bag/bag1_oucstu.jpg'],
    description: 'Bag Lorem ipsum dolor sit amet elit. Quis iure eligendi ab, nulla adipisci quos sit molestias, laborum beatae tempore a aspernatur quo laboriosam velit amet, ipsam vitae hic impedit!',
    inStock: true
  },
  {
    name: 'Laptop case',
    price: '50$',
    images: ['https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279890/Handcrafted/for-her/laptopcase/case1_d0knpi.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279890/Handcrafted/for-her/laptopcase/case3_jt4ml3.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279889/Handcrafted/for-her/laptopcase/case2_tog8o3.jpg'],
    description: 'Laptop case Lorem ipsum dolor sit amet elit. Quis iure eligendi ab, nulla adipisci quos sit molestias, laborum beatae tempore a aspernatur quo laboriosam velit amet, ipsam vitae hic impedit!',
    inStock: true
  },
  {
    name: 'Vase',
    price: '70$',
    images: ['https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279891/Handcrafted/for-her/vase/vase1_htvezg.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279891/Handcrafted/for-her/vase/vase2_kc4f28.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279891/Handcrafted/for-her/vase/vase3_a2sczf.jpg'],
    description: 'Vase Lorem ipsum dolor sit amet elit. Quis iure eligendi ab, nulla adipisci quos sit molestias, laborum beatae tempore a aspernatur quo laboriosam velit amet, ipsam vitae hic impedit!',
    inStock: true
  },
]

// FOR HOME: 
const forHome = [
  {
    name: 'Custom masks',
    price: '35$',
    images: ['https://res.cloudinary.com/dee8cfqkb/image/upload/v1582280192/Handcrafted/for-home/mask/mask2_zb4gjh.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582280191/Handcrafted/for-home/mask/mask1_u7enes.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582280191/Handcrafted/for-home/mask/mask3_rfkb17.jpg'],
    description: 'Masks dolor sit amet consectetur adipisicing elit. Quis iure eligendi ab, nulla adipisci quos sit molestias, laborum beatae tempore a aspernatur quo laboriosam velit amet, ipsam vitae hic impedit!',
    inStock: true
  },
  {
    name: 'Wooden shelves',
    price: '110$',
    images: ['https://res.cloudinary.com/dee8cfqkb/image/upload/v1582280192/Handcrafted/for-home/wooden/wooden3_hak0i6.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582280192/Handcrafted/for-home/wooden/wooden1_txpmqu.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582280191/Handcrafted/for-home/wooden/wooden2_zi8jy4.jpg'],
    description: 'Wooden ipsum dolor sit amet elit. Quis iure eligendi ab, nulla adipisci quos sit molestias, laborum beatae tempore a aspernatur quo laboriosam velit amet, ipsam vitae hic impedit!',
    inStock: true
  },
  {
    name: 'Figure',
    price: '70$',
    images: ['https://res.cloudinary.com/dee8cfqkb/image/upload/v1582280191/Handcrafted/for-home/figure/figure1_yehv5k.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582280190/Handcrafted/for-home/figure/figure2_aemkr9.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582280190/Handcrafted/for-home/figure/figure3_ewl3vl.jpg'],
    description: 'Figure Lorem ipsum dolor sit amet elit. Quis iure eligendi ab, nulla adipisci quos sit molestias, laborum beatae tempore a aspernatur quo laboriosam velit amet, ipsam vitae hic impedit!',
    inStock: true
  },
  {
    name: 'Handmade basket',
    price: '50$',
    images: ['https://res.cloudinary.com/dee8cfqkb/image/upload/v1582280115/Handcrafted/for-home/basket/basket1_lhmpyn.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582280113/Handcrafted/for-home/basket/basket2_qxewk5.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582280113/Handcrafted/for-home/basket/basket3_npaa8w.jpg'],
    description: 'Trumpet Lorem ipsum dolor sit amet elit. Quis iure eligendi ab, nulla adipisci quos sit molestias, laborum beatae tempore a aspernatur quo laboriosam velit amet, ipsam vitae hic impedit!',
    inStock: true
  },
  {
    name: 'Clock',
    price: '190$',
    images: ['https://res.cloudinary.com/dee8cfqkb/image/upload/v1582280118/Handcrafted/for-home/clock/clock2_xtnly9.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582280118/Handcrafted/for-home/clock/clock3_xzqlbx.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582280118/Handcrafted/for-home/clock/clock1_vqf7lc.jpg'],
    description: 'Clock Lorem ipsum dolor sit amet elit. Quis iure eligendi ab, nulla adipisci quos sit molestias, laborum beatae tempore a aspernatur quo laboriosam velit amet, ipsam vitae hic impedit!',
    inStock: true
  },
  {
    name: 'Curtains',
    price: '90$',
    images: ['https://res.cloudinary.com/dee8cfqkb/image/upload/v1582280191/Handcrafted/for-home/curtains/curtains2_ghipeq.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582280191/Handcrafted/for-home/curtains/curtains3_ff9oyr.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582280190/Handcrafted/for-home/curtains/curtains1_k3xokm.jpg'],
    description: 'Curtains Lorem ipsum dolor sit amet elit. Quis iure eligendi ab, nulla adipisci quos sit molestias, laborum beatae tempore a aspernatur quo laboriosam velit amet, ipsam vitae hic impedit!',
    inStock: true
  },
]

// TOYS:
const toys = [
  {
    name: 'Beautiful Animals set',
    price: '50$',
    images: ['https://res.cloudinary.com/dee8cfqkb/image/upload/v1582280313/Handcrafted/toys/animalset/aniaml3_tblwln.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582280313/Handcrafted/toys/animalset/animal2_gvwscm.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582280313/Handcrafted/toys/animalset/animal1_wehy7x.jpg'],
    description: 'Animals Lorem ipsum dolor sit amet elit. Quis iure eligendi ab, nulla adipisci quos sit molestias, laborum beatae tempore a aspernatur quo laboriosam velit amet, ipsam vitae hic impedit!',
    inStock: true
  },
  {
    name: 'Wooden ladybird',
    price: '18$',
    images: ['https://res.cloudinary.com/dee8cfqkb/image/upload/v1582280314/Handcrafted/toys/ladybird/ladybird2_ec50bg.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582280314/Handcrafted/toys/ladybird/ladybird3_qd82ln.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582280314/Handcrafted/toys/ladybird/ladybird1_d6qngh.jpg'],
    description: 'Ladybird Lorem ipsum dolor sit amet elit. Quis iure eligendi ab, nulla adipisci quos sit molestias, laborum beatae tempore a aspernatur quo laboriosam velit amet, ipsam vitae hic impedit!',
    inStock: true
  },
  {
    name: 'Wooden octopus',
    price: '20$',
    images: ['https://res.cloudinary.com/dee8cfqkb/image/upload/v1582280314/Handcrafted/toys/octopus/octopus3_w2vwau.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582280314/Handcrafted/toys/octopus/octopus1_f42llr.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582280314/Handcrafted/toys/octopus/octopus2_ie4pzn.jpg'],
    description: 'Octopus Lorem ipsum dolor sit amet elit. Quis iure eligendi ab, nulla adipisci quos sit molestias, laborum beatae tempore a aspernatur quo laboriosam velit amet, ipsam vitae hic impedit!',
    inStock: true
  },
  {
    name: 'Wooden bee',
    price: '20$',
    images: ['https://res.cloudinary.com/dee8cfqkb/image/upload/v1582280314/Handcrafted/toys/bee/bee1_b0qooe.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582280313/Handcrafted/toys/bee/bee3_f84tah.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582280313/Handcrafted/toys/bee/bee2_jetemf.jpg'],
    description: 'Bee Lorem ipsum dolor sit amet elit. Quis iure eligendi ab, nulla adipisci quos sit molestias, laborum beatae tempore a aspernatur quo laboriosam velit amet, ipsam vitae hic impedit!',
    inStock: true
  },
  {
    name: 'Dinosaurs set',
    price: '80$',
    images: ['https://res.cloudinary.com/dee8cfqkb/image/upload/v1582280314/Handcrafted/toys/dinosaurs/dinosaur2_ksjlia.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582280314/Handcrafted/toys/dinosaurs/dinosaur3_wijcvg.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582280313/Handcrafted/toys/dinosaurs/dinosaur1_dlscdu.jpg'],
    description: 'Dinosaurs Lorem ipsum dolor sit amet elit. Quis iure eligendi ab, nulla adipisci quos sit molestias, laborum beatae tempore a aspernatur quo laboriosam velit amet, ipsam vitae hic impedit!',
    inStock: true
  },
  {
    name: 'Smiling cat',
    price: '66$',
    images: ['https://res.cloudinary.com/dee8cfqkb/image/upload/v1582280313/Handcrafted/toys/cat/cat2_osvvxr.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582280313/Handcrafted/toys/cat/cat3_jbccwp.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582280313/Handcrafted/toys/cat/cat1_hnawby.jpg'],
    description: 'Cat Lorem ipsum dolor sit amet elit. Quis iure eligendi ab, nulla adipisci quos sit molestias, laborum beatae tempore a aspernatur quo laboriosam velit amet, ipsam vitae hic impedit!',
    inStock: true
  },
]

const hottest = [
  {
    name: 'Scandinavian Swetaer',
    price: '100$',
    images: ['https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279991/Handcrafted/for-him/sweater/sweater2_mxdgdh.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279991/Handcrafted/for-him/sweater/sweater3_hlc2pl.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279990/Handcrafted/for-him/sweater/sweater1_qe2mkv.jpg'],
    description: 'Sweater Lorem ipsum dolor sit amet elit. Quis iure eligendi ab, nulla adipisci quos sit molestias, laborum beatae tempore a aspernatur quo laboriosam velit amet, ipsam vitae hic impedit!',
    inStock: true
  },
  {
    name: 'Colorful beds',
    price: '30$',
    images: ['https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279889/Handcrafted/for-her/beads/beads1_tzw3fh.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279889/Handcrafted/for-her/beads/beads3_iggevu.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279888/Handcrafted/for-her/beads/beads2_lugjug.jpg'],
    description: ' Quis iure eligendi ab, Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla adipisci quos sit molestias, laborum beatae tempore a aspernatur quo laboriosam velit amet, ipsam vitae hic impedit!',
    inStock: true
  },
  {
    name: 'Wallet',
    price: '140$',
    images: ['https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279890/Handcrafted/for-her/ladywallet/wallet3_uy4gcf.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279889/Handcrafted/for-her/ladywallet/wallet2_tefjbl.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279889/Handcrafted/for-her/ladywallet/wallet1_zxqgwp.jpg'],
    description: 'Wallet Lorem ipsum dolor sit amet elit. Quis iure eligendi ab, nulla adipisci quos sit molestias, laborum beatae tempore a aspernatur quo laboriosam velit amet, ipsam vitae hic impedit!',
    inStock: true
  },
]

const newest = [
  {
    name: 'Vase',
    price: '70$',
    images: ['https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279891/Handcrafted/for-her/vase/vase1_htvezg.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279891/Handcrafted/for-her/vase/vase2_kc4f28.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582279891/Handcrafted/for-her/vase/vase3_a2sczf.jpg'],
    description: 'Vase Lorem ipsum dolor sit amet elit. Quis iure eligendi ab, nulla adipisci quos sit molestias, laborum beatae tempore a aspernatur quo laboriosam velit amet, ipsam vitae hic impedit!',
    inStock: true
  },
  {
    name: 'Figure',
    price: '70$',
    images: ['https://res.cloudinary.com/dee8cfqkb/image/upload/v1582280191/Handcrafted/for-home/figure/figure1_yehv5k.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582280190/Handcrafted/for-home/figure/figure2_aemkr9.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582280190/Handcrafted/for-home/figure/figure3_ewl3vl.jpg'],
    description: 'Figure Lorem ipsum dolor sit amet elit. Quis iure eligendi ab, nulla adipisci quos sit molestias, laborum beatae tempore a aspernatur quo laboriosam velit amet, ipsam vitae hic impedit!',
    inStock: true
  },
  {
    name: 'Beautiful Animals set',
    price: '50$',
    images: ['https://res.cloudinary.com/dee8cfqkb/image/upload/v1582280313/Handcrafted/toys/animalset/aniaml3_tblwln.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582280313/Handcrafted/toys/animalset/animal2_gvwscm.jpg',
      'https://res.cloudinary.com/dee8cfqkb/image/upload/v1582280313/Handcrafted/toys/animalset/animal1_wehy7x.jpg'],
    description: 'Animals Lorem ipsum dolor sit amet elit. Quis iure eligendi ab, nulla adipisci quos sit molestias, laborum beatae tempore a aspernatur quo laboriosam velit amet, ipsam vitae hic impedit!',
    inStock: true
  },
]