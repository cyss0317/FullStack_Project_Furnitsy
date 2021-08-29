require 'open-uri'
p1 = Product.create({name: "Hyndell Queen Upholstered Panel Storage Bed", description: "By pairing contemporary design with rich elements, the Hyndell queen panel bed is sure to bring sophistication and a touch of romance to your bedroom. The bed’s dark espresso finish and sumptuous velvet upholstery—made even more dramatic with the addition of a low-profile storage footboard—complement the luxurious style. Plushly padded button tufting on the headboard is love at first touch.",
highlights:"
Includes upholstered headboard, upholstered footboard and rails!
Made of wood, veneers and engineered wood!
Dark espresso brown finish with wire-brushed texture!
Headboard and footboard upholstery in polyester velvet!
Footboard bench with 3 open storage cubbies!
Assembly required!
Foundation/box spring required, sold separately!
Mattress available, sold separately!
Estimated Assembly Time: 50 Minutes!
Weight 187 lbs. (84.82 kgs.)", category: "Beds", measurement: 'Width: 66.00",Depth: 95.00",Height: 56.00"', color: "Dark/Brown", price: 1049.00  })
file1 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/hyndell_bed/B731-HDBD-DETAIL.webp')
p1.images.attach(io:file1, filename: 'images/hyndell_bed/B731-HDBD-DETAIL.webp')
file2 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/hyndell_bed/B731-FTBD-DETAIL.webp')
p1.images.attach(io:file2, filename: 'images/hyndell_bed/B731-FTBD-DETAIL.webp')
file3 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/hyndell_bed/B731-FINISH-500.jpeg')
p1.images.attach(io:file3, filename: 'images/hyndell_bed/B731-FINISH-500.jpeg')
file4 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/hyndell_bed/B731-FABRIC-SWATCH-500.jpeg')
p1.images.attach(io:file4, filename: 'images/hyndell_bed/B731-FABRIC-SWATCH-500.jpeg')
file5 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/hyndell_bed/B731-58-56S.webp')
p1.images.attach(io:file5, filename: 'images/hyndell_bed/B731-58-56S.webp')
file6 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/hyndell_bed/B731-58-56S-SW-P1-KO.webp')
p1.images.attach(io:file6, filename: 'images/hyndell_bed/B731-58-56S-SW-P1-KO.webp')


# answered bed size options, should be array
p2 = Product.create({name: "Dinsmore Twin over Twin Bunk Bed with Ladder", description: "Step up to a higher level of style in kids bedroom furniture with the Dinsmore twin bunk bed. A cool response to the trend in modern industrial design, this metal bunk bed sports a black and gray finish for a welcome touch of maturity.",
highlights:"
Includes twin/twin bunk bed with ladder!
Made of tubular metal with durable powdercoat finish!
Sturdy ladder leads to top bunk!
The Consumer Product Safety Commission states top bunks not be used for children under 6 years of age!
Built-in slats eliminate need for foundations/box springs!
Mattresses available, sold separately!
Assembly required!
Excluded from promotional discounts and coupons!
Estimated Assembly Time: 90 Minutes!
Weight 103 lbs. (46.72 kgs.)", category: "Beds", measurement: 'Width: 40.75",Depth: 75.00",Height: 61.63"', color: "Black/Gray", price: 479.00 })
file1 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/bunk_bed/main_B106-59-MOOD-B.png')
p2.images.attach(io:file1, filename: 'images/bunk_bed/main_B106-59-MOOD-B.png')
file2 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/bunk_bed/B106-59-SW-KO.webp')
p2.images.attach(io:file2, filename: 'images/bunk_bed/B106-59-SW-KO.webp')
file3 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/bunk_bed/B106-59-MOOD-C.webp')
p2.images.attach(io:file3, filename: 'images/bunk_bed/B106-59-MOOD-C.webp')
file4 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/bunk_bed/B106-59-Dinsmore-DIM.webp')
p2.images.attach(io:file4, filename: 'images/bunk_bed/B106-59-Dinsmore-DIM.webp')
file5 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/bunk_bed/B106-59-Dinsmore-DIM+(1).webp')
p2.images.attach(io:file5, filename: 'images/bunk_bed/B106-59-Dinsmore-DIM (1).webp')
file6 = open('https://furnitsy-furniture-images.s3.us-east-2.amazonaws.com/images/bunk_bed/B106-59-8x10-CROP.webp')


#answered home/ kids/ kids furnitures/ product
# should categories should be nested in categories



# Product.create({name: "", description: "", category: "", measurement: '', color: "", price:  })
# Product.create({name: "", description: "", category: "", measurement: '', color: "", price:  })
# Product.create({name: "", description: "", category: "", measurement: '', color: "", price:  })
# Product.create({name: "", description: "", category: "", measurement: '', color: "", price:  })