const fs = require('fs');

const manualTitles = {
  "download_1_iojf50.jpg": "Peace",
  "download_2_cfje1b.jpg": "Chaos",
  "download_3_xkbbqq.jpg": "Vibe",
  "download_4_zc2fkh.jpg": "Rhythm",
  "download_5_st6ggp.jpg": "Lion",
  "download_6_d0pclc.jpg": "Neon",
  "download_7_usxj38.jpg": "Retro",
  "Cr7_Art_k2rrrl.jpg": "Champion",
  "download_8_kejig1.jpg": "Abstract",
  "download_9_zvopir.jpg": "Minimal",
  "download_10_oy9prj.jpg": "Geometry",
  "11_hedx4g.png": "Illusion",
  "download_11_obqxg5.jpg": "Dream",
  "download_12_xw1jrj.jpg": "Echo",
  "13_dklr9s.png": "Pulse",
  "download_13_ysyb3a.jpg": "Aura",
  "download_14_yy9ha7.jpg": "Zenith",
  "15_dnycbg.png": "Horizon",
  "download_16_rjpfvv.jpg": "Eclipse",
  "download_17_wkkpn5.jpg": "Nova",
  "download_18_z1g4vx.jpg": "Vertex",
  "19_kmcnu5.png": "Prism",
  "download_19_fgwubu.jpg": "Spectrum",
  "20_lkjzfe.png": "Chroma",
  "download_20_lhgsj2.jpg": "Flow",
  "download_21_qirqfl.jpg": "Kinetic",
  "download_22_w91e9p.jpg": "Static",
  "24_fs7xny.png": "Dynamic",
  "download_24_cjgyis.jpg": "Fluid",
  "25_g6wgvq.png": "Solid",
  "download_25_zlpn1i.jpg": "Void",
  "26_sx6evm.png": "Matter",
  "download_26_rmtihw.jpg": "Energy",
  "27_c9bxz7.png": "Force",
  "download_28_xwkwze.jpg": "Motion",
  "29_m37a3e.png": "Stillness",
  "download_29_yuj1bs.jpg": "Silence",
  "30_wka8pc.png": "Sound",
  "download_30_vpdbja.jpg": "Vision",
  "31_qv6x3x.png": "Sight",
  "download_31_ol7fuk.jpg": "Focus",
  "download_32_zvganh.jpg": "Blur",
  "56_z1ye6l.png": "Sharp",
  "58_tcatux.png": "Soft",
  "60_h9bnjn.png": "Hard",
  "61_qcvccq.png": "Light",
  "62_wna4vm.png": "Dark",
  "63_uxncxf.png": "Shadow",
  "65_myjjkk.png": "Glow",
  "66_lo3hff.png": "Radiance",
  "67_cog8cs.png": "Luminescence",
  "70_umfafq.png": "Brilliance",
  "72_olmotq.png": "Spark",
  "73_n1vjmu.png": "Flare",
  "74_twmvna.png": "Gleam",
  "75_k8nwt0.png": "Glint",
  "76_hqugkr.png": "Shimmer",
  "92_rmlkv1.png": "Twinkle",
  "Vivid_Red_Glamour_vgrg4f.jpg": "Glamour",
  "The_ape_punk_____intiaj.jpg": "Punk",
  "Popeye_the_Sailor___Basquiat-Inspired_Street_Art_Portrait_fyfu2u.jpg": "Sailor",
  "New_Wallpaper_jpitw9.jpg": "Wallpaper",
  "Photo_Premium_AI-generated_blc2sl.jpg": "Premium",
  "Lionel_Messi__The_GOAT_in_Vector_Art_z67u22.jpg": "Victory",
  "Lionel_Messi_ejtm3k.jpg": "Legend",
  "JOJADOJA__jojadoja_jjdoja___sbezzo.jpg": "Doja",
  "Hunter_qw9wbh.jpg": "Hunter",
  "download_bbkpii.jpg": "Mystery",
  "AI_ART_ge2nvq.jpg": "Cyber",
  "Che_Guevara_Portrait___HD_Wallpaper_sdmofo.jpg": "Rebel",
  "__A_portrait_of_a_male_character_in_big_red_glasses_made_up_of_large_plastic_parts_toy_black_and_red_colors___lis1xd.jpg": "Plastic",
  "Cultural_Cool_cobvhj.jpg": "Culture"
};

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

async function main() {
  let productsFile = fs.readFileSync('src/data/products.ts', 'utf8');
  const match = productsFile.match(/const posterProducts: Product\[\] = (\[[\s\S]*?\]);\n/);
  
  if (!match) {
    console.log("Could not find posterProducts");
    return;
  }

  let postersStr = match[1];
  let posters;
  try {
    posters = eval('(' + postersStr + ')');
  } catch (e) {
    console.error("Eval failed", e);
    return;
  }
  
  console.log(`Processing ${posters.length} posters...`);
  
  posters.forEach(p => {
    const filename = p.image.split('/').pop();
    let title = manualTitles[filename];
    if (!title) {
      console.log("No title for", filename);
      title = "Aesthetic";
    }
    p.title = title;
    p.slug = slugify(title);
    p.description = `${title} - A premium quality poster for your modern space.`;
  });
  
  const newPostersStr = JSON.stringify(posters, null, 2);
  productsFile = productsFile.replace(match[0], 'const posterProducts: Product[] = ' + newPostersStr + ';\n');
  fs.writeFileSync('src/data/products.ts', productsFile);
  console.log("Updated posters with manual titles.");
}

main();
