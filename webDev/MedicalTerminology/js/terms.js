var system = [ "All", "Integumentary System", "Digestive System", "Respiratory System", "Cardiovascular System", "Blood, Lymphatic, and Immune Systems", "Musculoskeletal System", "Urinary System", "Reproductive System", "Endocrine System", "Nervous System", "Special Senses", "General" ];

var prefix = [
	{
		"term": "None",
		"system": [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
		"category": "",
		"definition": ""
	},
	{
		"term": "a-",
		"system": [ 0, 3, 4, 5, 6, 9, 10 ],
		"category": "Other",
		"definition": "without, away from, not"
	},
	{
		"term": "ab-",
		"system": [ 0, 6, 12 ],
		"category": "Direction",
		"definition": "away from"
	},
	{
		"term": "ad-",
		"system": [ 0, 6, 12 ],
		"category": "Direction",
		"definition": "toward"
	},
	{
		"term": "af-",
		"system": [ 0, 10 ],
		"category": "",
		"definition": "toward"
	},
	{
		"term": "agora-",
		"system": [ 0 ],
		"category": "",
		"definition": "marketplace"
	},
	{
		"term": "allo-",
		"system": [ 0, 1, 5 ],
		"category": "",
		"definition": "other, differing from normal"
	},
	{
		"term": "an-",
		"system": [ 0, 1, 3, 5, 7, 8, 10, 11 ],
		"category": "Other",
		"definition": "without, not"
	},
	{
		"term": "ana-",
		"system": [ 0, 5 ],
		"category": "",
		"definition": "against; up; back"
	},
	{
		"term": "aniso-",
		"system": [ 0, 5 ],
		"category": "",
		"definition": "unequal, dissimilar"
	},
	{
		"term": "ante-",
		"system": [ 0, 8 ],
		"category": "",
		"definition": "before, in front of"
	},
	{
		"term": "anti-",
		"system": [ 0, 2, 5, 8, 9 ],
		"category": "Other",
		"definition": "against"
	},
	{
		"term": "auto-",
		"system": [ 0, 1 ],
		"category": "",
		"definition": "self, own"
	},
	{
		"term": "bi-",
		"system": [ 0, 8, 10 ],
		"category": "Number and Measurement",
		"definition": "two"
	},
	{
		"term": "brachy-",
		"system": [ 0, 8 ],
		"category": "",
		"definition": "short"
	},
	{
		"term": "brady-",
		"system": [ 0, 3, 4, 10 ],
		"category": "Other",
		"definition": "slow"
	},
	{
		"term": "cata-",
		"system": [ 0 ],
		"category": "",
		"definition": "down"
	},
	{
		"term": "circum-",
		"system": [ 0, 6, 8 ],
		"category": "Direction",
		"definition": "around"
	},
	{
		"term": "contra-",
		"system": [ 0 ],
		"category": "Other",
		"definition": "against, opposite"
	},
	{
		"term": "de-",
		"system": [ 0 ],
		"category": "",
		"definition": "without, sensation"
	},
	{
		"term": "di-",
		"system": [ 0 ],
		"category": "",
		"definition": "double"
	},
	{
		"term": "dia-",
		"system": [ 0, 1, 2, 4, 7 ],
		"category": "Direction",
		"definition": "through, across"
	},
	{
		"term": "dipl-",
		"system": [ 0, 11 ],
		"category": "Number and Measurement",
		"definition": "double"
	},
	{
		"term": "dys-",
		"system": [ 0, 2, 3, 6, 7, 8, 10 ],
		"category": "Other",
		"definition": "abnormal, difficult, painful, bad"
	},
	{
		"term": "ec-",
		"system": [ 0 ],
		"category": "",
		"definition": "out, out from"
	},
	{
		"term": "echo-",
		"system": [ 0, 4 ],
		"category": "",
		"definition": "repeated sound"
	},
	{
		"term": "ecto-",
		"system": [ 0 ],
		"category": "Direction",
		"definition": "outside, outward"
	},
	{
		"term": "ef-",
		"system": [ 0, 10 ],
		"category": "",
		"definition": "away from"
	},
	{
		"term": "en-",
		"system": [ 0 ],
		"category": "",
		"definition": "inward, in, within"
	},
	{
		"term": "end-",
		"system": [ 0 ],
		"category": "",
		"definition": "in, within, inside"
	},
	{
		"term": "endo-",
		"system": [ 0, 1, 2, 3, 4, 8, 9 ],
		"category": "Direction",
		"definition": "inner, within, inside"
	},
	{
		"term": "epi-",
		"system": [ 0, 1, 4, 6, 8, 10 ],
		"category": "Position",
		"definition": "above, upon"
	},
	{
		"term": "eso-",
		"system": [ 0 ],
		"category": "",
		"definition": "inward"
	},
	{
		"term": "eu-",
		"system": [ 0, 3 ],
		"category": "Other",
		"definition": "normal, good"
	},
	{
		"term": "ex-",
		"system": [ 0, 9 ],
		"category": "Direction",
		"definition": "external, outward, out, out from"
	},
	{
		"term": "exo-",
		"system": [ 0, 9, 11 ],
		"category": "Direction",
		"definition": "outward, outside"
	},
	{
		"term": "extra-",
		"system": [ 0, 4 ],
		"category": "Direction",
		"definition": "outside of"
	},
	{
		"term": "hemi-",
		"system": [ 0, 10 ],
		"category": "Number and Measurement",
		"definition": "one half"
	},
	{
		"term": "hetero-",
		"system": [ 0, 12 ],
		"category": "Other",
		"definition": "different"
	},
	{
		"term": "homo-",
		"system": [ 0, 1, 5 ],
		"category": "Other",
		"definition": "same"
	},
	{
		"term": "homeo-",
		"system": [ 0, 1, 12 ],
		"category": "Other",
		"definition": "same, alike"
	},
	{
		"term": "hyp-",
		"system": [ 0, 3 ],
		"category": "Position",
		"definition": "below, under, deficient"
	},
	{
		"term": "hyper-",
		"system": [ 0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 11 ],
		"category": "Number and Measurement",
		"definition": "excessive, above normal, increased"
	},
	{
		"term": "hypo-",
		"system": [ 0, 2, 3, 5, 6, 7, 8, 9, 10, 11 ],
		"category": "Position",
		"definition": "below, under, deficient, decreased"
	},
	{
		"term": "im-",
		"system": [ 0 ],
		"category": "",
		"definition": "not"
	},
	{
		"term": "in-",
		"system": [ 0, 3, 5, 6 ],
		"category": "",
		"definition": "in, not, inward"
	},
	{
		"term": "infra-",
		"system": [ 0, 6, 12 ],
		"category": "Position",
		"definition": "below, under"
	},
	{
		"term": "inter-",
		"system": [ 0, 6 ],
		"category": "Position",
		"definition": "among, between"
	},
	{
		"term": "intra-",
		"system": [ 0, 1, 4, 10, 11 ],
		"category": "Direction",
		"definition": "inside, within"
	},
	{
		"term": "iso-",
		"system": [ 0, 5 ],
		"category": "",
		"definition": "same, equal"
	},
	{
		"term": "macro-",
		"system": [ 0, 5, 10 ],
		"category": "Number and Measurement",
		"definition": "large"
	},
	{
		"term": "mal-",
		"system": [ 0 ],
		"category": "Other",
		"definition": "bad"
	},
	{
		"term": "medi-",
		"system": [ 0 ],
		"category": "",
		"definition": "middle"
	},
	{
		"term": "mega-",
		"system": [ 0 ],
		"category": "",
		"definition": "enlargement"
	},
	{
		"term": "meso-",
		"system": [ 0 ],
		"category": "",
		"definition": "middle"
	},
	{
		"term": "meta-",
		"system": [ 0 ],
		"category": "",
		"definition": "change, beyond"
	},
	{
		"term": "micro-",
		"system": [ 0, 5, 10 ],
		"category": "Number and Measurement",
		"definition": "small"
	},
	{
		"term": "mono-",
		"system": [ 0, 5 ],
		"category": "Number and Measurement",
		"definition": "one"
	},
	{
		"term": "multi-",
		"system": [ 0, 8 ],
		"category": "Number and Measurement",
		"definition": "many"
	},
	{
		"term": "neo-",
		"system": [ 0, 5 ],
		"category": "",
		"definition": "new"
	},
	{
		"term": "nulli-",
		"system": [ 0, 8 ],
		"category": "",
		"definition": "none"
	},
	{
		"term": "oxy-",
		"system": [ 0 ],
		"category": "",
		"definition": "quick, sharp"
	},
	{
		"term": "pachy-",
		"system": [ 0 ],
		"category": "",
		"definition": "thick"
	},
	{
		"term": "pan-",
		"system": [ 0, 2 ],
		"category": "Other",
		"definition": "all"
	},
	{
		"term": "para-",
		"system": [ 0, 9 ],
		"category": "Direction",
		"definition": "beside, near, beyond"
	},
	{
		"term": "per-",
		"system": [ 0, 3 ],
		"category": "",
		"definition": "through"
	},
	{
		"term": "peri-",
		"system": [ 0, 2, 3, 4, 12 ],
		"category": "Direction",
		"definition": "around"
	},
	{
		"term": "poly-",
		"system": [ 0, 3, 5, 7, 8 ],
		"category": "Number and Measurement",
		"definition": "many, much"
	},
	{
		"term": "post-",
		"system": [ 0, 2, 8, 9 ],
		"category": "Position",
		"definition": "after, behind"
	},
	{
		"term": "pre-",
		"system": [ 0, 8 ],
		"category": "Position",
		"definition": "before, in front of"
	},
	{
		"term": "primi-",
		"system": [ 0, 8 ],
		"category": "Number and Measurement",
		"definition": "first"
	},
	{
		"term": "pro-",
		"system": [ 0 ],
		"category": "Position",
		"definition": "before, in front of"
	},
	{
		"term": "pseudo-",
		"system": [ 0, 8 ],
		"category": "Other",
		"definition": "false"
	},
	{
		"term": "quadri-",
		"system": [ 0, 10 ],
		"category": "Number and Measurement",
		"definition": "four"
	},
	{
		"term": "retro-",
		"system": [ 0, 7, 8 ],
		"category": "Position",
		"definition": "backward, behind"
	},
	{
		"term": "semi-",
		"system": [ 0 ],
		"category": "",
		"definition": "partial, half"
	},
	{
		"term": "sub-",
		"system": [ 0, 1, 2, 6, 10 ],
		"category": "Position",
		"definition": "below, under"
	},
	{
		"term": "super-",
		"system": [ 0, 12 ],
		"category": "Direction",
		"definition": "upper, above"
	},
	{
		"term": "supra-",
		"system": [ 0, 4, 6 ],
		"category": "Direction",
		"definition": "above, excessive, superior"
	},
	{
		"term": "sym-",
		"system": [ 0 ],
		"category": "",
		"definition": "union, together, joined"
	},
	{
		"term": "syn-",
		"system": [ 0, 6 ],
		"category": "Other",
		"definition": "union, together, joined"
	},
	{
		"term": "tachy-",
		"system": [ 0, 3, 4 ],
		"category": "Other",
		"definition": "fast, rapid"
	},
	{
		"term": "trans-",
		"system": [ 0, 1, 4, 8, 12 ],
		"category": "Direction",
		"definition": "across, through"
	},
	{
		"term": "tri-",
		"system": [ 0 ],
		"category": "Number and Measurement",
		"definition": "three"
	},
	{
		"term": "ultra-",
		"system": [ 0, 7, 12 ],
		"category": "Direction",
		"definition": "beyond, excess"
	},
	{
		"term": "uni-",
		"system": [ 0, 10 ],
		"category": "Number and Measurement",
		"definition": "one"
	},
	{
		"term": "e-",
		"system": [ 0, 6, 10 ],
		"category": "",
		"definition": "outward, without"
	},
	{
		"term": "xeno-",
		"system": [ 0, 1 ],
		"category": "",
		"definition": "strange"
	},
	{
		"term": "tele-",
		"system": [ 0, 4 ],
		"category": "",
		"definition": "distance"
	},
	{
		"term": "oo-",
		"system": [ 0, 8 ],
		"category": "",
		"definition": "egg or ovary"
	}
];

var root = [
	{
		"term": "None",
		"system": [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
		"definition": ""
	},
	{
		"term": "adip/o",
		"system": [ 0, 1 ],
		"definition": "fat"
	},
	{
		"term": "albin/o",
		"system": [ 0, 1 ],
		"definition": "white"
	},
	{
		"term": "bi/o",
		"system": [ 0, 1 ],
		"definition": "life"
	},
	{
		"term": "cry/o",
		"system": [ 0, 1, 8 ],
		"definition": "cold"
	},
	{
		"term": "cutane/o",
		"system": [ 0, 1 ],
		"definition": "skin"
	},
	{
		"term": "derm/o",
		"system": [ 0, 1 ],
		"definition": "skin"
	},
	{
		"term": "dermat/o",
		"system": [ 0, 1 ],
		"definition": "skin"
	},
	{
		"term": "diaphor/o",
		"system": [ 0, 1 ],
		"definition": "profuse sweating"
	},
	{
		"term": "electr/o",
		"system": [ 0, 1, 4, 5 ],
		"definition": "electricity"
	},
	{
		"term": "erythr/o",
		"system": [ 0, 1, 5 ],
		"definition": "red"
	},
	{
		"term": "hidr/o",
		"system": [ 0, 1 ],
		"definition": "sweat"
	},
	{
		"term": "ichthy/o",
		"system": [ 0, 1 ],
		"definition": "dry, scaly"
	},
	{
		"term": "kerat/o",
		"system": [ 0, 1, 11 ],
		"definition": "horny tissue, hard, cornea"
	},
	{
		"term": "leuk/o",
		"system": [ 0, 1, 5 ],
		"definition": "white"
	},
	{
		"term": "lip/o",
		"system": [ 0, 1 ],
		"definition": "fat"
	},
	{
		"term": "melan/o",
		"system": [ 0, 1 ],
		"definition": "black"
	},
	{
		"term": "myc/o",
		"system": [ 0, 1, 11 ],
		"definition": "fungus (plural, fungi)"
	},
	{
		"term": "necr/o",
		"system": [ 0, 1 ],
		"definition": "death"
	},
	{
		"term": "onych/o",
		"system": [ 0, 1 ],
		"definition": "nail"
	},
	{
		"term": "pedicul/o",
		"system": [ 0, 1 ],
		"definition": "lice"
	},
	{
		"term": "phot/o",
		"system": [ 0, 1, 11 ],
		"definition": "light"
	},
	{
		"term": "py/o",
		"system": [ 0, 1, 7, 8, 11 ],
		"definition": "pus"
	},
	{
		"term": "scler/o",
		"system": [ 0, 1, 4, 11 ],
		"definition": "hardening; sclera (white of eye)"
	},
	{
		"term": "seb/o",
		"system": [ 0, 1 ],
		"definition": "sebum, sebaceous"
	},
	{
		"term": "trich/o",
		"system": [ 0, 1 ],
		"definition": "hair"
	},
	{
		"term": "ungu/o",
		"system": [ 0, 1 ],
		"definition": "nail"
	},
	{
		"term": "vesic/o",
		"system": [ 0, 1, 7 ],
		"definition": "bladder"
	},
	{
		"term": "xer/o",
		"system": [ 0, 1, 12 ],
		"definition": "dry"
	},
	{
		"term": "an/o",
		"system": [ 0, 2 ],
		"definition": "anus"
	},
	{
		"term": "append/o",
		"system": [ 0, 2 ],
		"definition": "appendix"
	},
	{
		"term": "appendic/o",
		"system": [ 0, 2 ],
		"definition": "appendix"
	},
	{
		"term": "bar/o",
		"system": [ 0, 2 ],
		"definition": "weight"
	},
	{
		"term": "bucc/o",
		"system": [ 0, 2 ],
		"definition": "cheek"
	},
	{
		"term": "cec/o",
		"system": [ 0, 2 ],
		"definition": "cecum"
	},
	{
		"term": "cheil/o",
		"system": [ 0, 2 ],
		"definition": "lip"
	},
	{
		"term": "cholangi/o",
		"system": [ 0, 2 ],
		"definition": "bile vessel"
	},
	{
		"term": "chol/e",
		"system": [ 0, 2 ],
		"definition": "bile, gall"
	},
	{
		"term": "cholecyst/o",
		"system": [ 0, 2 ],
		"definition": "gallbladder"
	},
	{
		"term": "choledoch/o",
		"system": [ 0, 2 ],
		"definition": "bile duct"
	},
	{
		"term": "cirrh/o",
		"system": [ 0, 2 ],
		"definition": "yellow"
	},
	{
		"term": "col/o",
		"system": [ 0, 2 ],
		"definition": "colon, large intestine"
	},
	{
		"term": "colon/o",
		"system": [ 0, 2 ],
		"definition": "colon, large intestine"
	},
	{
		"term": "dent/o",
		"system": [ 0, 2 ],
		"definition": "teeth"
	},
	{
		"term": "diverticul/o",
		"system": [ 0, 2 ],
		"definition": "pouch"
	},
	{
		"term": "duoden/o",
		"system": [ 0, 2 ],
		"definition": "duodenum (first part of small intestine)"
	},
	{
		"term": "enter/o",
		"system": [ 0, 2 ],
		"definition": "intestine (usually small intestine)"
	},
	{
		"term": "esophag/o",
		"system": [ 0, 2 ],
		"definition": "esophagus"
	},
	{
		"term": "gastr/o",
		"system": [ 0, 2 ],
		"definition": "stomach"
	},
	{
		"term": "gingiv/o",
		"system": [ 0, 2 ],
		"definition": "gum(s)"
	},
	{
		"term": "gloss/o",
		"system": [ 0, 2 ],
		"definition": "tongue"
	},
	{
		"term": "hepat/o",
		"system": [ 0, 2 ],
		"definition": "liver"
	},
	{
		"term": "ile/o",
		"system": [ 0, 2 ],
		"definition": "ileum (third part of small intestine)"
	},
	{
		"term": "jejun/o",
		"system": [ 0, 2 ],
		"definition": "jejunum (second part of small intestine)"
	},
	{
		"term": "labi/o",
		"system": [ 0, 2 ],
		"definition": "lip"
	},
	{
		"term": "lapar/o",
		"system": [ 0, 2, 8 ],
		"definition": "abdomen"
	},
	{
		"term": "lingu/o",
		"system": [ 0, 2 ],
		"definition": "tongue"
	},
	{
		"term": "lith/o",
		"system": [ 0, 2, 7, 9 ],
		"definition": "stone, calculus"
	},
	{
		"term": "odont/o",
		"system": [ 0, 2 ],
		"definition": "teeth"
	},
	{
		"term": "or/o",
		"system": [ 0, 2 ],
		"definition": "mouth"
	},
	{
		"term": "palat/o",
		"system": [ 0, 2 ],
		"definition": "palate"
	},
	{
		"term": "pancreat/o",
		"system": [ 0, 2, 9 ],
		"definition": "pancreas"
	},
	{
		"term": "pharyng/o",
		"system": [ 0, 2, 3 ],
		"definition": "pharynx (throat)"
	},
	{
		"term": "polyp/o",
		"system": [ 0, 2 ],
		"definition": "polyp"
	},
	{
		"term": "proct/o",
		"system": [ 0, 2 ],
		"definition": "anus, rectum"
	},
	{
		"term": "pylor/o",
		"system": [ 0, 2 ],
		"definition": "pylorus"
	},
	{
		"term": "pyr/o",
		"system": [ 0, 2 ],
		"definition": "fire"
	},
	{
		"term": "rect/o",
		"system": [ 0, 2 ],
		"definition": "rectum"
	},
	{
		"term": "sial/o",
		"system": [ 0, 2 ],
		"definition": "saliva, salivary gland"
	},
	{
		"term": "sialaden/o",
		"system": [ 0, 2 ],
		"definition": "salivary gland"
	},
	{
		"term": "sigmoid/o",
		"system": [ 0, 2 ],
		"definition": "sigmoid colon"
	},
	{
		"term": "stomat/o",
		"system": [ 0, 2 ],
		"definition": "mouth"
	},
	{
		"term": "adenoid/o",
		"system": [ 0, 3, 5 ],
		"definition": "adenoids"
	},
	{
		"term": "aer/o",
		"system": [ 0, 3 ],
		"definition": "air"
	},
	{
		"term": "alveol/o",
		"system": [ 0, 3 ],
		"definition": "alveolus; air sac"
	},
	{
		"term": "anthrac/o",
		"system": [ 0, 3 ],
		"definition": "coal, coal dust"
	},
	{
		"term": "atel/o",
		"system": [ 0, 3 ],
		"definition": "incomplete; imperfect"
	},
	{
		"term": "bronch/o",
		"system": [ 0, 3 ],
		"definition": "bronchus (plural, bronchi)"
	},
	{
		"term": "bronchi/o",
		"system": [ 0, 3 ],
		"definition": "bronchus (plural, bronchi)"
	},
	{
		"term": "bronchiol/o",
		"system": [ 0, 3 ],
		"definition": "bronchiole"
	},
	{
		"term": "coni/o",
		"system": [ 0, 3 ],
		"definition": "dust"
	},
	{
		"term": "cyan/o",
		"system": [ 0, 1, 3 ],
		"definition": "blue"
	},
	{
		"term": "diaphragmat/o",
		"system": [ 0, 3 ],
		"definition": "diaphragm"
	},
	{
		"term": "epiglott/o",
		"system": [ 0, 3 ],
		"definition": "epiglottis"
	},
	{
		"term": "laryng/o",
		"system": [ 0, 3 ],
		"definition": "larynx (voice box)"
	},
	{
		"term": "lob/o",
		"system": [ 0, 3, 10 ],
		"definition": "lobe"
	},
	{
		"term": "nas/o",
		"system": [ 0, 3 ],
		"definition": "nose"
	},
	{
		"term": "muc/o",
		"system": [ 0, 3 ],
		"definition": "mucus"
	},
	{
		"term": "orth/o",
		"system": [ 0, 3, 6 ],
		"definition": "straight"
	},
	{
		"term": "ox/i",
		"system": [ 0, 3 ],
		"definition": "oxygen"
	},
	{
		"term": "ox/o",
		"system": [ 0, 3 ],
		"definition": "oxygen"
	},
	{
		"term": "pector/o",
		"system": [ 0, 3 ],
		"definition": "chest"
	},
	{
		"term": "phren/o",
		"system": [ 0, 3 ],
		"definition": "diaphragm; mind"
	},
	{
		"term": "pleur/o",
		"system": [ 0, 3 ],
		"definition": "pleura"
	},
	{
		"term": "pneum/o",
		"system": [ 0, 3 ],
		"definition": "air; lung"
	},
	{
		"term": "pneumon/o",
		"system": [ 0, 3 ],
		"definition": "air; lung"
	},
	{
		"term": "pulmon/o",
		"system": [ 0, 3 ],
		"definition": "lung"
	},
	{
		"term": "rhin/o",
		"system": [ 0, 3 ],
		"definition": "nose"
	},
	{
		"term": "sept/o",
		"system": [ 0, 3, 4 ],
		"definition": "septum"
	},
	{
		"term": "sinus/o",
		"system": [ 0, 3 ],
		"definition": "sinus, cavity"
	},
	{
		"term": "spir/o",
		"system": [ 0, 3 ],
		"definition": "breathe"
	},
	{
		"term": "steth/o",
		"system": [ 0, 3, 4 ],
		"definition": "chest"
	},
	{
		"term": "trache/o",
		"system": [ 0, 3 ],
		"definition": "trachea (windpipe)"
	},
	{
		"term": "tonsill/o",
		"system": [ 0, 3, 5 ],
		"definition": "tonsils"
	},
	{
		"term": "thorac/o",
		"system": [ 0, 3, 6 ],
		"definition": "chest"
	},
	{
		"term": "tuss/o",
		"system": [ 0, 3 ],
		"definition": "cough"
	},
	{
		"term": "aneurysm/o",
		"system": [ 0, 4 ],
		"definition": "widened blood vessel"
	},
	{
		"term": "angi/o",
		"system": [ 0, 4 ],
		"definition": "vessel (usually blood or lymph)"
	},
	{
		"term": "aort/o",
		"system": [ 0, 4 ],
		"definition": "aorta"
	},
	{
		"term": "arteri/o",
		"system": [ 0, 4 ],
		"definition": "artery"
	},
	{
		"term": "arteriol/o",
		"system": [ 0, 4 ],
		"definition": "arteriole"
	},
	{
		"term": "ather/o",
		"system": [ 0, 4 ],
		"definition": "fatty plaque"
	},
	{
		"term": "atri/o",
		"system": [ 0, 4 ],
		"definition": "atrium"
	},
	{
		"term": "cardi/o",
		"system": [ 0, 4 ],
		"definition": "heart"
	},
	{
		"term": "coron/o",
		"system": [ 0, 4 ],
		"definition": "heart"
	},
	{
		"term": "corpor/o",
		"system": [ 0, 4 ],
		"definition": "body"
	},
	{
		"term": "embol/o",
		"system": [ 0, 4, 5 ],
		"definition": "embolus (plug)"
	},
	{
		"term": "hemangi/o",
		"system": [ 0, 4 ],
		"definition": "blood vessel"
	},
	{
		"term": "isch/o",
		"system": [ 0, 4 ],
		"definition": "to hold back, block"
	},
	{
		"term": "my/o",
		"system": [ 0, 4, 6 ],
		"definition": "muscle"
	},
	{
		"term": "myocardi/o",
		"system": [ 0, 4, 6 ],
		"definition": "heart muscle"
	},
	{
		"term": "pect/o",
		"system": [ 0, 4 ],
		"definition": "chest"
	},
	{
		"term": "phleb/o",
		"system": [ 0, 4 ],
		"definition": "vein"
	},
	{
		"term": "sphygm/o",
		"system": [ 0, 4 ],
		"definition": "pulse"
	},
	{
		"term": "sten/o",
		"system": [ 0, 4 ],
		"definition": "narrowing, stricture"
	},
	{
		"term": "thromb/o",
		"system": [ 0, 4, 5 ],
		"definition": "blood clot"
	},
	{
		"term": "valv/o",
		"system": [ 0, 4 ],
		"definition": "valve"
	},
	{
		"term": "valvul/o",
		"system": [ 0, 4 ],
		"definition": "valve"
	},
	{
		"term": "varic/o",
		"system": [ 0, 4, 8 ],
		"definition": "dilated vein"
	},
	{
		"term": "vas/o",
		"system": [ 0, 4, 8, 9 ],
		"definition": "vessel; vas deferens; duct"
	},
	{
		"term": "vascul/o",
		"system": [ 0, 4 ],
		"definition": "vessel (usually blood or lymph)"
	},
	{
		"term": "ven/o",
		"system": [ 0, 4 ],
		"definition": "vein"
	},
	{
		"term": "ven/i",
		"system": [ 0, 4 ],
		"definition": "vein"
	},
	{
		"term": "ventricul/o",
		"system": [ 0, 4, 10 ],
		"definition": "ventricle (of heart or brain)"
	},
	{
		"term": "aden/o",
		"system": [ 0, 5 ],
		"definition": "gland"
	},
	{
		"term": "agglutin/o",
		"system": [ 0, 5 ],
		"definition": "clumping, gluing"
	},
	{
		"term": "axill/o",
		"system": [ 0, 5 ],
		"definition": "axilla, underarm"
	},
	{
		"term": "bas/o",
		"system": [ 0, 5 ],
		"definition": "base (alkaline, opposite or acid)"
	},
	{
		"term": "blast/o",
		"system": [ 0, 5, 10, 11 ],
		"definition": "embryonic cell"
	},
	{
		"term": "chrom/o",
		"system": [ 0, 5, 9, 11 ],
		"definition": "color"
	},
	{
		"term": "coagul/o",
		"system": [ 0, 5 ],
		"definition": "clotting"
	},
	{
		"term": "cyt/o",
		"system": [ 0, 5, 9 ],
		"definition": "cell"
	},
	{
		"term": "eosin/o",
		"system": [ 0, 5 ],
		"definition": "dawn (rose-colored)"
	},
	{
		"term": "fibrin/o",
		"system": [ 0, 5 ],
		"definition": "fibers, fibrous"
	},
	{
		"term": "fus/o",
		"system": [ 0, 5 ],
		"definition": "pouring"
	},
	{
		"term": "granul/o",
		"system": [ 0, 5 ],
		"definition": "granule"
	},
	{
		"term": "hem/o",
		"system": [ 0, 3, 5, 8 ],
		"definition": "blood"
	},
	{
		"term": "hemat/o",
		"system": [ 0, 5, 7 ],
		"definition": "blood"
	},
	{
		"term": "immun/o",
		"system": [ 0, 5 ],
		"definition": "immune, immunity, safe"
	},
	{
		"term": "inguin/o",
		"system": [ 0, 5 ],
		"definition": "groin region"
	},
	{
		"term": "kary/o",
		"system": [ 0, 5 ],
		"definition": "nucleus"
	},
	{
		"term": "lymphaden/o",
		"system": [ 0, 5 ],
		"definition": "lymph gland (node)"
	},
	{
		"term": "lymph/o",
		"system": [ 0, 5 ],
		"definition": "lymph"
	},
	{
		"term": "lymphangi/o",
		"system": [ 0, 5 ],
		"definition": "lymph vessel"
	},
	{
		"term": "morph/o",
		"system": [ 0, 5, 12 ],
		"definition": "form, shape, structure"
	},
	{
		"term": "myel/o",
		"system": [ 0, 5, 6, 10 ],
		"definition": "bone marrow; spinal cord"
	},
	{
		"term": "neutr/o",
		"system": [ 0, 5 ],
		"definition": "neutral; neither"
	},
	{
		"term": "nucle/o",
		"system": [ 0, 5 ],
		"definition": "nucleus"
	},
	{
		"term": "path/o",
		"system": [ 0, 5, 12 ],
		"definition": "disease"
	},
	{
		"term": "phag/o",
		"system": [ 0, 5 ],
		"definition": "swallowing, eating"
	},
	{
		"term": "plas/o",
		"system": [ 0, 5 ],
		"definition": "formation, growth"
	},
	{
		"term": "poikil/o",
		"system": [ 0, 5 ],
		"definition": "varied, irregular"
	},
	{
		"term": "reticul/o",
		"system": [ 0, 5 ],
		"definition": "net, mesh"
	},
	{
		"term": "sanguin/o",
		"system": [ 0, 5 ],
		"definition": "blood"
	},
	{
		"term": "septic/o",
		"system": [ 0, 5, 8 ],
		"definition": "infection"
	},
	{
		"term": "ser/o",
		"system": [ 0, 5 ],
		"definition": "serum"
	},
	{
		"term": "sider/o",
		"system": [ 0, 5 ],
		"definition": "iron"
	},
	{
		"term": "splen/o",
		"system": [ 0, 5 ],
		"definition": "spleen"
	},
	{
		"term": "thym/o",
		"system": [ 0, 5, 9 ],
		"definition": "thymus gland"
	},
	{
		"term": "tox/o",
		"system": [ 0, 5 ],
		"definition": "poison"
	},
	{
		"term": "xen/o",
		"system": [ 0, 1, 5 ],
		"definition": "foreign, strange"
	},
	{
		"term": "acromi/o",
		"system": [ 0, 6 ],
		"definition": "acromion (projection of scapula)"
	},
	{
		"term": "ankyl/o",
		"system": [ 0, 6 ],
		"definition": "stiffness; bent, crooked"
	},
	{
		"term": "arthr/o",
		"system": [ 0, 5, 6 ],
		"definition": "joint"
	},
	{
		"term": "articul/o",
		"system": [ 0, 6 ],
		"definition": "joint"
	},
	{
		"term": "brachi/o",
		"system": [ 0, 6 ],
		"definition": "arm"
	},
	{
		"term": "burs/o",
		"system": [ 0, 6 ],
		"definition": "sac"
	},
	{
		"term": "calcane/o",
		"system": [ 0, 6 ],
		"definition": "calcaneum (heel bone)"
	},
	{
		"term": "carp/o",
		"system": [ 0, 6 ],
		"definition": "carpus (wrist bone)"
	},
	{
		"term": "cephal/o",
		"system": [ 0, 6, 10 ],
		"definition": "head"
	},
	{
		"term": "cervic/o",
		"system": [ 0, 6, 8, 10 ],
		"definition": "neck; cervix uteri (neck of uterus)"
	},
	{
		"term": "chondr/o",
		"system": [ 0, 6 ],
		"definition": "cartilage"
	},
	{
		"term": "clavicul/o",
		"system": [ 0, 6 ],
		"definition": "clavicle (collar bone)"
	},
	{
		"term": "coccyg/o",
		"system": [ 0, 6 ],
		"definition": "coccyx"
	},
	{
		"term": "cortic/o",
		"system": [ 0, 6, 9 ],
		"definition": "outer portion"
	},
	{
		"term": "cost/o",
		"system": [ 0, 6 ],
		"definition": "ribs"
	},
	{
		"term": "crani/o",
		"system": [ 0, 6, 10 ],
		"definition": "cranium (skull)"
	},
	{
		"term": "dactyl/o",
		"system": [ 0, 6 ],
		"definition": "fingers; toes"
	},
	{
		"term": "duct/o",
		"system": [ 0, 6 ],
		"definition": "to bring"
	},
	{
		"term": "extens/o",
		"system": [ 0, 6 ],
		"definition": "to stretch out"
	},
	{
		"term": "fasci/o",
		"system": [ 0, 6 ],
		"definition": "band, fascia (fibrous membrane supporting and separating muscles)"
	},
	{
		"term": "femor/o",
		"system": [ 0, 6 ],
		"definition": "femur (thigh bone)"
	},
	{
		"term": "fibul/o",
		"system": [ 0, 6 ],
		"definition": "fibula (smaller bone of lower leg)"
	},
	{
		"term": "fibr/o",
		"system": [ 0, 6, 8 ],
		"definition": "fiber, fibrous tissue"
	},
	{
		"term": "flex/o",
		"system": [ 0, 6 ],
		"definition": "to bend"
	},
	{
		"term": "humer/o",
		"system": [ 0, 6 ],
		"definition": "humerus (upper arm bone)"
	},
	{
		"term": "ili/o",
		"system": [ 0, 6 ],
		"definition": "ilium (lateral, flaring portion of hip bone)"
	},
	{
		"term": "ischi/o",
		"system": [ 0, 6 ],
		"definition": "ischium (lower portion of hip bone)"
	},
	{
		"term": "kinesi/o",
		"system": [ 0, 6, 10 ],
		"definition": "movement"
	},
	{
		"term": "kines/o",
		"system": [ 0, 6, 10 ],
		"definition": "movement"
	},
	{
		"term": "kyph/o",
		"system": [ 0, 6 ],
		"definition": "humpback"
	},
	{
		"term": "lamin/o",
		"system": [ 0, 6 ],
		"definition": "lamina (part of vertebral arch)"
	},
	{
		"term": "leiomy/o",
		"system": [ 0, 6 ],
		"definition": "smooth muscle (visceral)"
	},
	{
		"term": "lord/o",
		"system": [ 0, 6 ],
		"definition": "curve, swayback"
	},
	{
		"term": "lumb/o",
		"system": [ 0, 6, 10 ],
		"definition": "loins (lower back)"
	},
	{
		"term": "umbilic/o",
		"system": [ 0, 2 ],
		"definition": "umbilicus (the belly button)"
	},
	{
		"term": "mandibul/o",
		"system": [ 0, 6 ],
		"definition": "mandible"
	},
	{
		"term": "maxill/o",
		"system": [ 0, 6 ],
		"definition": "maxilla"
	},
	{
		"term": "medull/o",
		"system": [ 0, 6, 10 ],
		"definition": "inner portion"
	},
	{
		"term": "metacarp/o",
		"system": [ 0, 6 ],
		"definition": "metacarpus (hand bones)"
	},
	{
		"term": "metatars/o",
		"system": [ 0, 6 ],
		"definition": "metatarsus (foot bone)"
	},
	{
		"term": "muscul/o",
		"system": [ 0, 6 ],
		"definition": "muscle"
	},
	{
		"term": "myos/o",
		"system": [ 0, 6 ],
		"definition": "muscle"
	},
	{
		"term": "oste/o",
		"system": [ 0, 6 ],
		"definition": "bone"
	},
	{
		"term": "patell/o",
		"system": [ 0, 6 ],
		"definition": "patella (kneecap)"
	},
	{
		"term": "ped/i",
		"system": [ 0, 6 ],
		"definition": "foot; child"
	},
	{
		"term": "ped/o",
		"system": [ 0, 6 ],
		"definition": "foot; child"
	},
	{
		"term": "pelv/o",
		"system": [ 0, 6, 8 ],
		"definition": "pelvis"
	},
	{
		"term": "pelv/i",
		"system": [ 0, 6 ],
		"definition": "pelvis"
	},
	{
		"term": "phalang/o",
		"system": [ 0, 6 ],
		"definition": "phalanges (bones of fingers and toes)"
	},
	{
		"term": "plant/o",
		"system": [ 0, 6 ],
		"definition": "sole of foot"
	},
	{
		"term": "pod/o",
		"system": [ 0, 6 ],
		"definition": "foot"
	},
	{
		"term": "prosthet/o",
		"system": [ 0, 6 ],
		"definition": "addition"
	},
	{
		"term": "pub/o",
		"system": [ 0, 6 ],
		"definition": "pubis, pubic bone"
	},
	{
		"term": "radi/o",
		"system": [ 0, 6, 12 ],
		"definition": "radiation, x-ray; radius (lower arm bone on thumb side)"
	},
	{
		"term": "rhabd/o",
		"system": [ 0, 6 ],
		"definition": "rod-shaped (striated)"
	},
	{
		"term": "rhabdomy/o",
		"system": [ 0, 6 ],
		"definition": "rod-shaped (striated) muscle"
	},
	{
		"term": "rotat/o",
		"system": [ 0, 6 ],
		"definition": "to revolve"
	},
	{
		"term": "sacr/o",
		"system": [ 0, 6 ],
		"definition": "sacrum"
	},
	{
		"term": "sarc/o",
		"system": [ 0, 6 ],
		"definition": "flesh (muscular substance)"
	},
	{
		"term": "scapul/o",
		"system": [ 0, 6 ],
		"definition": "scapula"
	},
	{
		"term": "scoli/o",
		"system": [ 0, 6 ],
		"definition": "crooked, bent"
	},
	{
		"term": "spin/o",
		"system": [ 0, 6 ],
		"definition": "spine"
	},
	{
		"term": "spondyl/o",
		"system": [ 0, 6 ],
		"definition": "vertebrae (backbone)"
	},
	{
		"term": "stern/o",
		"system": [ 0, 6 ],
		"definition": "sternum (breastbone)"
	},
	{
		"term": "synov/o",
		"system": [ 0, 6 ],
		"definition": "synovial membrane, synovial fluid"
	},
	{
		"term": "synovi/o",
		"system": [ 0, 6 ],
		"definition": "synovial membrane"
	},
	{
		"term": "tars/o",
		"system": [ 0, 6 ],
		"definition": "ankle"
	},
	{
		"term": "ten/o",
		"system": [ 0, 6 ],
		"definition": "tendon"
	},
	{
		"term": "tend/o",
		"system": [ 0, 6 ],
		"definition": "tendon"
	},
	{
		"term": "tendin/o",
		"system": [ 0, 6 ],
		"definition": "tendon"
	},
	{
		"term": "tibi/o",
		"system": [ 0, 6 ],
		"definition": "tibia (larger bone of lower leg)"
	},
	{
		"term": "uln/o",
		"system": [ 0, 6 ],
		"definition": "ulna"
	},
	{
		"term": "vers/o",
		"system": [ 0, 6 ],
		"definition": "to turn"
	},
	{
		"term": "vertebr/o",
		"system": [ 0, 6 ],
		"definition": "vertebrae (backbone)"
	},
	{
		"term": "albumin/o",
		"system": [ 0, 7 ],
		"definition": "albumin (protein)"
	},
	{
		"term": "azot/o",
		"system": [ 0, 7 ],
		"definition": "nitrogenous compounds"
	},
	{
		"term": "bacteri/o",
		"system": [ 0, 7 ],
		"definition": "bacteria (singular, bacterium)"
	},
	{
		"term": "cyst/o",
		"system": [ 0, 7 ],
		"definition": "bladder, cyst, sac of fluid"
	},
	{
		"term": "glomerul/o",
		"system": [ 0, 7 ],
		"definition": "glomerulus"
	},
	{
		"term": "glycos/o",
		"system": [ 0, 7, 9 ],
		"definition": "sugar, sweetness, glucose"
	},
	{
		"term": "kal/i",
		"system": [ 0, 7, 9 ],
		"definition": "potassium (an electrolyte)"
	},
	{
		"term": "keton/o",
		"system": [ 0, 6, 7 ],
		"definition": "ketone bodies (acids and acetones)"
	},
	{
		"term": "meat/o",
		"system": [ 0, 7 ],
		"definition": "opening, meatus"
	},
	{
		"term": "nephr/o",
		"system": [ 0, 7 ],
		"definition": "kidney"
	},
	{
		"term": "noct/o",
		"system": [ 0, 7 ],
		"definition": "night"
	},
	{
		"term": "olig/o",
		"system": [ 0, 7, 8 ],
		"definition": "scanty, few"
	},
	{
		"term": "protein/o",
		"system": [ 0, 7 ],
		"definition": "protein"
	},
	{
		"term": "pyel/o",
		"system": [ 0, 7 ],
		"definition": "renal pelvis"
	},
	{
		"term": "ren/o",
		"system": [ 0, 7 ],
		"definition": "kidney"
	},
	{
		"term": "ureter/o",
		"system": [ 0, 7 ],
		"definition": "ureter"
	},
	{
		"term": "urethr/o",
		"system": [ 0, 7 ],
		"definition": "urethra"
	},
	{
		"term": "ur/o",
		"system": [ 0, 7 ],
		"definition": "urine, urinary tract"
	},
	{
		"term": "urin/o",
		"system": [ 0, 7, 8 ],
		"definition": "urine"
	},
	{
		"term": "amni/o",
		"system": [ 0, 8 ],
		"definition": "amnion (amniotic sac)"
	},
	{
		"term": "chori/o",
		"system": [ 0, 8 ],
		"definition": "chorion"
	},
	{
		"term": "colp/o",
		"system": [ 0, 8 ],
		"definition": "vagina"
	},
	{
		"term": "culd/o",
		"system": [ 0, 8 ],
		"definition": "cul-de-sac"
	},
	{
		"term": "embry/o",
		"system": [ 0, 8 ],
		"definition": "embryo"
	},
	{
		"term": "episi/o",
		"system": [ 0, 8 ],
		"definition": "vulva"
	},
	{
		"term": "fet/o",
		"system": [ 0, 8 ],
		"definition": "fetus"
	},
	{
		"term": "vagin/o",
		"system": [ 0, 8 ],
		"definition": "vagina"
	},
	{
		"term": "vulv/o",
		"system": [ 0, 8 ],
		"definition": "vulva"
	},
	{
		"term": "galact/o",
		"system": [ 0, 8 ],
		"definition": "milk"
	},
	{
		"term": "lact/o",
		"system": [ 0, 8 ],
		"definition": "milk"
	},
	{
		"term": "gynec/o",
		"system": [ 0, 8 ],
		"definition": "woman, female"
	},
	{
		"term": "hymen/o",
		"system": [ 0, 8 ],
		"definition": "hymen"
	},
	{
		"term": "hyster/o",
		"system": [ 0, 8 ],
		"definition": "uterus (womb)"
	},
	{
		"term": "metri/o",
		"system": [ 0, 8 ],
		"definition": "uterus (womb)"
	},
	{
		"term": "uter/o",
		"system": [ 0, 8 ],
		"definition": "uterus (womb)"
	},
	{
		"term": "mamm/o",
		"system": [ 0, 8 ],
		"definition": "breast"
	},
	{
		"term": "mast/o",
		"system": [ 0, 8 ],
		"definition": "breast"
	},
	{
		"term": "men/o",
		"system": [ 0, 8 ],
		"definition": "menses, menstruation"
	},
	{
		"term": "metr/o",
		"system": [ 0, 8 ],
		"definition": "uterus (womb); measure"
	},
	{
		"term": "nat/o",
		"system": [ 0, 8 ],
		"definition": "birth"
	},
	{
		"term": "o/o",
		"system": [ 0, 8 ],
		"definition": "egg"
	},
	{
		"term": "oophor/o",
		"system": [ 0, 8 ],
		"definition": "ovary"
	},
	{
		"term": "ovari/o",
		"system": [ 0, 8, 9 ],
		"definition": "ovary"
	},
	{
		"term": "perine/o",
		"system": [ 0, 8 ],
		"definition": "perineum (area between scrotum [or vulva in the female] and anus)"
	},
	{
		"term": "salping/o",
		"system": [ 0, 8, 11 ],
		"definition": "tube (usually fallopian or eustachian [auditory] tube)"
	},
	{
		"term": "acr/o",
		"system": [ 0, 9, 12 ],
		"definition": "extremities (hands and feet), top, extreme point"
	},
	{
		"term": "adren/o",
		"system": [ 0, 9 ],
		"definition": "adrenal glands"
	},
	{
		"term": "adrenal/o",
		"system": [ 0, 9 ],
		"definition": "adrenal glands"
	},
	{
		"term": "andr/o",
		"system": [ 0, 8, 9 ],
		"definition": "male"
	},
	{
		"term": "calc/o",
		"system": [ 0, 9 ],
		"definition": "calcium"
	},
	{
		"term": "crin/o",
		"system": [ 0, 9 ],
		"definition": "secrete"
	},
	{
		"term": "estr/o",
		"system": [ 0, 9 ],
		"definition": "female"
	},
	{
		"term": "gluc/o",
		"system": [ 0, 9 ],
		"definition": "sugar, sweetness, glucose"
	},
	{
		"term": "glyc/o",
		"system": [ 0, 9 ],
		"definition": "sugar, sweetness, glucose"
	},
	{
		"term": "gonad/o",
		"system": [ 0, 8, 9 ],
		"definition": "gonads, sex glands"
	},
	{
		"term": "home/o",
		"system": [ 0, 9 ],
		"definition": "same, alike"
	},
	{
		"term": "iod/o",
		"system": [ 0, 9 ],
		"definition": "iodine"
	},
	{
		"term": "ket/o",
		"system": [ 0, 9 ],
		"definition": "ketones"
	},
	{
		"term": "mineral/o",
		"system": [ 0, 9 ],
		"definition": "minerals, electrolytes"
	},
	{
		"term": "natr/o",
		"system": [ 0, 9 ],
		"definition": "sodium"
	},
	{
		"term": "ophthalm/o",
		"system": [ 0, 9, 11 ],
		"definition": "eye"
	},
	{
		"term": "parathyroid/o",
		"system": [ 0, 9 ],
		"definition": "parathyroid glands"
	},
	{
		"term": "pineal/o",
		"system": [ 0, 9 ],
		"definition": "pineal gland"
	},
	{
		"term": "pituitar/o",
		"system": [ 0, 9 ],
		"definition": "pituitary gland"
	},
	{
		"term": "testicul/o",
		"system": [ 0, 8, 9 ],
		"definition": "testes"
	},
	{
		"term": "thyr/o",
		"system": [ 0, 9 ],
		"definition": "thyroid gland"
	},
	{
		"term": "thyroid/o",
		"system": [ 0, 9 ],
		"definition": "thyroid gland"
	},
	{
		"term": "toxic/o",
		"system": [ 0, 9 ],
		"definition": "poison"
	},
	{
		"term": "alges/o",
		"system": [ 0, 10 ],
		"definition": "sense of pain"
	},
	{
		"term": "astr/o",
		"system": [ 0, 10 ],
		"definition": "star"
	},
	{
		"term": "cerebell/o",
		"system": [ 0, 10 ],
		"definition": "cerebellum"
	},
	{
		"term": "cerebr/o",
		"system": [ 0, 10 ],
		"definition": "cerebrum"
	},
	{
		"term": "clon/o",
		"system": [ 0, 10 ],
		"definition": "rapid contracting and relaxing"
	},
	{
		"term": "dur/o",
		"system": [ 0, 10 ],
		"definition": "dura mater"
	},
	{
		"term": "encephal/o",
		"system": [ 0, 10 ],
		"definition": "brain"
	},
	{
		"term": "esthes/o",
		"system": [ 0, 10 ],
		"definition": "sensation, feeling"
	},
	{
		"term": "gangli/o",
		"system": [ 0, 10 ],
		"definition": "ganglion (knot or knot-like mass)"
	},
	{
		"term": "gli/o",
		"system": [ 0, 10, 10 ],
		"definition": "glue, neuroglial tissue"
	},
	{
		"term": "lept/o",
		"system": [ 0, 10 ],
		"definition": "thin, slender"
	},
	{
		"term": "lex/o",
		"system": [ 0, 10 ],
		"definition": "word, phrase"
	},
	{
		"term": "mening/o",
		"system": [ 0, 10 ],
		"definition": "meninges (membranes covering the brain and spinal cord)"
	},
	{
		"term": "meningi/o",
		"system": [ 0, 10 ],
		"definition": "meninges (membranes covering the brain and spinal cord)"
	},
	{
		"term": "narc/o",
		"system": [ 0, 10 ],
		"definition": "stupor, sleep, numbness"
	},
	{
		"term": "neur/o",
		"system": [ 0, 10 ],
		"definition": "nerve"
	},
	{
		"term": "poli/o",
		"system": [ 0, 10 ],
		"definition": "grey matter"
	},
	{
		"term": "pont/o",
		"system": [ 0, 10 ],
		"definition": "pons"
	},
	{
		"term": "radicul/o",
		"system": [ 0, 10 ],
		"definition": "nerve root"
	},
	{
		"term": "sthen/o",
		"system": [ 0, 10 ],
		"definition": "strenght"
	},
	{
		"term": "thalam/o",
		"system": [ 0, 10 ],
		"definition": "thalamus"
	},
	{
		"term": "thec/o",
		"system": [ 0, 10 ],
		"definition": "sheath (usually refers to meninges)"
	},
	{
		"term": "ton/o",
		"system": [ 0, 10 ],
		"definition": "tone, tension"
	},
	{
		"term": "ambly/o",
		"system": [ 0, 11 ],
		"definition": "dull, dim"
	},
	{
		"term": "aque/o",
		"system": [ 0, 11 ],
		"definition": "water"
	},
	{
		"term": "audi/o",
		"system": [ 0, 11 ],
		"definition": "hearing"
	},
	{
		"term": "blephar/o",
		"system": [ 0, 11 ],
		"definition": "eyelid"
	},
	{
		"term": "choroid/o",
		"system": [ 0, 11 ],
		"definition": "choroid"
	},
	{
		"term": "conjunctiv/o",
		"system": [ 0, 11 ],
		"definition": "conjunctiva"
	},
	{
		"term": "core/o",
		"system": [ 0, 11 ],
		"definition": "pupil"
	},
	{
		"term": "corne/o",
		"system": [ 0, 11 ],
		"definition": "cornea"
	},
	{
		"term": "cycl/o",
		"system": [ 0, 11 ],
		"definition": "ciliary body of eye; circular; cycle"
	},
	{
		"term": "dacry/o",
		"system": [ 0,11 ],
		"definition": "tear; lacrimal apparatus (duct, sac, or gland)"
	},
	{
		"term": "dacryocyst/o",
		"system": [ 0, 11 ],
		"definition": "lacrimal sac"
	},
	{
		"term": "glauc/o",
		"system": [ 0, 11 ],
		"definition": "grey"
	},
	{
		"term": "goni/o",
		"system": [ 0, 11 ],
		"definition": "angle"
	},
	{
		"term": "irid/o",
		"system": [ 0, 11 ],
		"definition": "iris"
	},
	{
		"term": "labyrinth/o",
		"system": [ 0, 11 ],
		"definition": "labyrinth (inner ear)"
	},
	{
		"term": "lacrim/o",
		"system": [ 0, 11 ],
		"definition": "tear; lacrimal apparatus (duct, sac, or gland)"
	},
	{
		"term": "mastoid/o",
		"system": [ 0, 11 ],
		"definition": "mastoid process"
	},
	{
		"term": "myring/o",
		"system": [ 0, 11 ],
		"definition": "tympanic membrane (eardrum)"
	},
	{
		"term": "ocul/o",
		"system": [ 0, 11 ],
		"definition": "eye"
	},
	{
		"term": "opt/o",
		"system": [ 0, 11 ],
		"definition": "eye, vision"
	},
	{
		"term": "optic/o",
		"system": [ 0, 11 ],
		"definition": "eye, vision"
	},
	{
		"term": "ot/o",
		"system": [ 0, 11 ],
		"definition": "ear"
	},
	{
		"term": "phac/o",
		"system": [ 0, 11 ],
		"definition": "lens"
	},
	{
		"term": "presby/o",
		"system": [ 0, 11 ],
		"definition": "old age"
	},
	{
		"term": "pupill/o",
		"system": [ 0, 11 ],
		"definition": "pupil"
	},
	{
		"term": "retin/o",
		"system": [ 0, 11 ],
		"definition": "retina"
	},
	{
		"term": "scot/o",
		"system": [ 0, 11 ],
		"definition": "darkness"
	},
	{
		"term": "staped/o",
		"system": [ 0, 11 ],
		"definition": "stapes"
	},
	{
		"term": "tympan/o",
		"system": [ 0, 11 ],
		"definition": "tympanic membrane (eardrum)"
	},
	{
		"term": "vitr/o",
		"system": [ 0, 11 ],
		"definition": "vitreous body (of the eye)"
	},
	{
		"term": "balan/o",
		"system": [ 0, 8 ],
		"definition": "glans penis"
	},
	{
		"term": "crypt/o",
		"system": [ 0, 1, 8 ],
		"definition": "hidden"
	},
	{
		"term": "epididym/o",
		"system": [ 0, 8 ],
		"definition": "epididymis"
	},
	{
		"term": "genit/o",
		"system": [ 0, 8 ],
		"definition": "genitalia"
	},
	{
		"term": "orch/o",
		"system": [ 0, 8 ],
		"definition": "testis (plural, testes)"
	},
	{
		"term": "orchi/o",
		"system": [ 0, 8 ],
		"definition": "testis (plural, testes)"
	},
	{
		"term": "orchid/o",
		"system": [ 0, 8 ],
		"definition": "testis (plural, testes)"
	},
	{
		"term": "pen/o",
		"system": [ 0, 8 ],
		"definition": "penis"
	},
	{
		"term": "prostat/o",
		"system": [ 0, 8 ],
		"definition": "prostate gland"
	},
	{
		"term": "spermat/o",
		"system": [ 0, 8 ],
		"definition": "spermatozoa, sperm cells"
	},
	{
		"term": "sperm/o",
		"system": [ 0, 8 ],
		"definition": "spermatozoa, sperm cells"
	},
	{
		"term": "sperm/i",
		"system": [ 0, 8 ],
		"definition": "spermatozoa, sperm cells"
	},
	{
		"term": "test/o",
		"system": [ 0, 8 ],
		"definition": "testis (plural, testes)"
	},
	{
		"term": "vesicul/o",
		"system": [ 0, 8 ],
		"definition": "seminal vesicle"
	},
	{
		"term": "eti/o",
		"system": [ 0, 12 ],
		"definition": "cause"
	},
	{
		"term": "idi/o",
		"system": [ 0, 12 ],
		"definition": "unknown"
	},
	{
		"term": "somat/o",
		"system": [ 0, 12 ],
		"definition": "body"
	},
	{
		"term": "son/o",
		"system": [ 0, 7, 12 ],
		"definition": "sound"
	},
	{
		"term": "tom/o",
		"system": [ 0, 12 ],
		"definition": "to cut"
	},
	{
		"term": "viscer/o",
		"system": [ 0, 12 ],
		"definition": "internal organs"
	},
	{
		"term": "squam/o",
		"system": [ 0, 1 ],
		"definition": "scale"
	},
	{
		"term": "sudor/o",
		"system": [ 0, 1 ],
		"definition": "sweat"
	},
	{
		"term": "derm/a",
		"system": [ 0 ],
		"definition": "skin"
	},
	{
		"term": "gene/o",
		"system": [ 0 ],
		"definition": "species"
	},
	{
		"term": "lipid/o",
		"system": [ 0, 1 ],
		"definition": "fat"
	},
	{
		"term": "pil/o",
		"system": [ 0, 1 ],
		"definition": "hair"
	},
	{
		"term": "steat/o",
		"system": [ 0, 1 ],
		"definition": "fat"
	},
	{
		"term": "plasm/a",
		"system": [ 0, 5 ],
		"definition": "plasma or cytoplasm"
	},
	{
		"term": "plasm/o",
		"system": [ 0, 5 ],
		"definition": "plasma or cytoplasm"
	},
	{
		"term": "hist/o",
		"system": [ 0 ],
		"definition": "tissue"
	},
	{
		"term": "anter/o",
		"system": [ 0 ],
		"definition": "anterior, front"
	},
	{
		"term": "caud/o",
		"system": [ 0, 10 ],
		"definition": "tail"
	},
	{
		"term": "dist/o",
		"system": [ 0 ],
		"definition": "far, farthest"
	},
	{
		"term": "dors/o",
		"system": [ 0 ],
		"defintion": "back (of body)"
	},
	{
		"term": "infer/o",
		"system": [ 0 ],
		"definition": "lower, below"
	},
	{
		"term": "later/o",
		"system": [ 0, 8, 10 ],
		"definition": "side, to one side"
	},
	{
		"term": "medi/o",
		"system": [ 0 ],
		"definition": "middle"
	},
	{
		"term": "poster/o",
		"system": [ 0 ],
		"definition": "back (of body), behind"
	},
	{
		"term": "proxim/o",
		"system": [ 0 ],
		"definition": "near, nearest"
	},
	{
		"term": "ventr/o",
		"system": [ 0 ],
		"definition": "belly, belly side"
	},
	{
		"term": "abdomin/o",
		"system": [ 0 ],
		"definition": "abdomen"
	},
	{
		"term": "xanth/o",
		"system": [ 0 ],
		"definition": "yellow"
	},
	{
		"term": "chlor/o",
		"system": [ 0 ],
		"definition": "green"
	},
	{
		"term": "jaund/o",
		"system": [ 0 ],
		"definition": "yellow"
	},
	{
		"term": "rrhythm/o",
		"system": [ 0, 4 ],
		"definition": "rhythm"
	},
	{
		"term": "peritone/o",
		"system": [ 0, 7 ],
		"definition": "peritoneum"
	},
	{
		"term": "psych/o",
		"system": [ 0, 10 ],
		"definition": "mind"
	},
	{
		"term": "dont/o",
		"system": [ 0, 2 ],
		"definition": "teeth"
	},
	{
		"term": "erythem/o",
		"system": [ 0, 1 ],
		"definition": "red, flushed"
	},
	{
		"term": "erythemat/o",
		"system": [ 0, 1 ],
		"definition": "red, flushed"
	},
	{
		"term": "dipl/o",
		"system": [ 0, 11 ],
		"definition": "double"
	},
	{
		"term": "dips/o",
		"system": [ 0, 7 ],
		"definition": "thirst"
	},
	{
		"term": "carcin/o",
		"system": [ 0, 5 ],
		"definition": "cancer"
	},
	{
		"term": "caus/o",
		"system": [ 0, 1 ],
		"definition": "burning, burn"
	},
	{
		"term": "caust/o",
		"system": [ 0, 1 ],
		"definition": "burning, burn"
	},
	{
		"term": "rube/o",
		"system": [ 0, 1 ],
		"definition": "red"
	},
	{
		"term": "arter/o",
		"system": [ 0, 4 ],
		"definition": "artery"
	},
	{
		"term": "card/o",
		"system": [ 0, 4 ],
		"definition": "heart"
	},
	{
		"term": "gen/o",
		"system": [ 0, 10 ],
		"definition": "forming, producing, origin"
	},
	{
		"term": "gigant/o",
		"system": [ 0, 9 ],
		"definition": "giant, very large"
	},
	{
		"term": "hirsut/o",
		"system": [ 0, 9 ],
		"definition": "hairy, rough"
	},
	{
		"term": "hydr/o",
		"system": [ 0, 7 ],
		"definition": "water"
	},
	{
		"term": "nyct/o",
		"system": [ 0, 11 ],
		"definition": "night"
	},
	{
		"term": "nyctal/o",
		"system": [ 0, 11 ],
		"definition": "night"
	},
	{
		"term": "nerv/o",
		"system": [ 0, 10 ],
		"definition": "nerve"
	},
	{
		"term": "neur/i",
		"system": [ 0, 10 ],
		"definition": "nerve"
	},
	{
		"term": "pept/o",
		"system": [ 0, 2 ],
		"definition": "digest, digestion"
	},
	{
		"term": "paus/o",
		"system": [ 0, 8 ],
		"definition": "cessation, stopping"
	},
	{
		"term": "pyr/o",
		"system": [ 0, 5 ],
		"definition": "fever, fire"
	},
	{
		"term": "pyret/o",
		"system": [ 0, 5 ],
		"definition": "fever, fire"
	},
	{
		"term": "quadr/i",
		"system": [ 0, 6 ],
		"definition": "four"
	},
	{
		"term": "quadr/o",
		"system": [ 0, 6 ],
		"definition": "four"
	},
	{
		"term": "rhytid/o",
		"system": [ 0, 1, 11 ],
		"definition": "wrinkle"
	},
	{
		"term": "spasmod/o",
		"system": [ 0, 10 ],
		"definition": "sudden involuntary contraction, tightening, or cramping"
	},
	{
		"term": "ten/o",
		"system": [ 0, 6 ],
		"definition": "tendon"
	},
	{
		"term": "therapeut/o",
		"system": [ 0, 5 ],
		"definition": "treatment"
	}
];

var suffix = [
	{
		"term": "None",
		"system": [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
		"category": "",
		"definition": ""
	},
	{
		"term": "-a",
		"system": [ 0 ],
		"category": "",
		"definition": "noun ending"
	},
	{
		"term": "-ac",
		"system": [ 0, 4 ],
		"category": "Adjective, Noun, and Diminuative",
		"definition": "pertaining to"
	},
	{
		"term": "-acusia",
		"system": [ 0, 11 ],
		"category": "",
		"definition": "hearing"
	},
	{
		"term": "-acusis",
		"system": [ 0, 11 ],
		"category": "",
		"definition": "hearing"
	},
	{
		"term": "-ad",
		"system": [ 0 ],
		"category": "",
		"definition": "toward"
	},
	{
		"term": "-al",
		"system": [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11 ],
		"category": "Adjective, Noun, and Diminuative",
		"definition": "pertaining to"
	},
	{
		"term": "-algesia",
		"system": [ 0 ],
		"category": "",
		"definition": "pain"
	},
	{
		"term": "-algia",
		"system": [ 0, 1, 3, 6, 7, 8, 10 ],
		"category": "Diagnostic/Pathological",
		"definition": "pain"
	},
	{
		"term": "-ar",
		"system": [ 0, 4, 5, 6, 9, 10, 11 ],
		"category": "Adjective, Noun, and Diminuative",
		"definition": "pertaining to"
	},
	{
		"term": "-arche",
		"system": [ 0, 8 ],
		"category": "",
		"definition": "beginning"
	},
	{
		"term": "-ary",
		"system": [ 0, 3, 4, 5, 7, 8 ],
		"category": "Adjective, Noun, and Diminuative",
		"definition": "pertaining to"
	},
	{
		"term": "-asthenia",
		"system": [ 0, 6, 10 ],
		"category": "",
		"definition": "weakness, debility"
	},
	{
		"term": "-ate",
		"system": [ 0, 5 ],
		"category": "",
		"definition": "having the form of, possessing"
	},
	{
		"term": "-ation",
		"system": [ 0, 3, 5 ],
		"category": "",
		"definition": "process (of)"
	},
	{
		"term": "-blast",
		"system": [ 0, 5, 6, 8 ],
		"category": "",
		"definition": "immature, embryonic cell"
	},
	{
		"term": "-capnia",
		"system": [ 0, 3 ],
		"category": "",
		"definition": "carbon dioxide"
	},
	{
		"term": "-cardia",
		"system": [ 0 ],
		"category": "",
		"definition": "heart condition"
	},
	{
		"term": "-cele",
		"system": [ 0, 1, 2, 3, 5, 7, 8, 9, 10, 11 ],
		"category": "Diagnostic/Pathological",
		"definition": "hernia, protrusion, swelling"
	},
	{
		"term": "-centesis",
		"system": [ 0, 3, 4, 8 ],
		"category": "Surgical",
		"definition": "puncture to withdraw fluid"
	},
	{
		"term": "-ceps",
		"system": [ 0 ],
		"category": "",
		"definition": "head"
	},
	{
		"term": "-ception",
		"system": [ 0, 8 ],
		"category": "",
		"definition": "conceiving"
	},
	{
		"term": "-cide",
		"system": [ 0, 8 ],
		"category": "",
		"definition": "to kill"
	},
	{
		"term": "-cision",
		"system": [ 0, 8 ],
		"category": "",
		"definition": "a cutting"
	},
	{
		"term": "-clasia",
		"system": [ 0, 6 ],
		"category": "",
		"definition": "to break, surgical fracture"
	},
	{
		"term": "-clasis",
		"system": [ 0 ],
		"category": "",
		"definition": "to break, surgical fracture"
	},
	{
		"term": "-clast",
		"system": [ 0, 6 ],
		"category": "",
		"definition": "to break; surgical fracture"
	},
	{
		"term": "-clysis",
		"system": [ 0 ],
		"category": "",
		"definition": "irrigation, washing"
	},
	{
		"term": "-continence",
		"system": [ 0 ],
		"category": "",
		"definition": "to hold back"
	},
	{
		"term": "-crine",
		"system": [ 0, 9 ],
		"category": "",
		"definition": "secrete"
	},
	{
		"term": "-cusia",
		"system": [ 0, 11 ],
		"category": "",
		"definition": "hearing"
	},
	{
		"term": "-cusis",
		"system": [ 0, 11 ],
		"category": "",
		"definition": "hearing"
	},
	{
		"term": "-cyesis",
		"system": [ 0, 8 ],
		"category": "",
		"definition": "state of pregnancy"
	},
	{
		"term": "-cyte",
		"system": [ 0, 1, 5, 6, 7, 8, 10 ],
		"category": "",
		"definition": "cell"
	},
	{
		"term": "-derma",
		"system": [ 0, 1 ],
		"category": "",
		"definition": "skin condition"
	},
	{
		"term": "-desis",
		"system": [ 0, 6 ],
		"category": "Surgical",
		"definition": "binding, fixation (of a bone or joint)"
	},
	{
		"term": "-dipsia",
		"system": [ 0, 8, 9 ],
		"category": "",
		"definition": "thirst"
	},
	{
		"term": "-duction",
		"system": [ 0 ],
		"category": "",
		"definition": "act of leading, bringing, conducting"
	},
	{
		"term": "-dynia",
		"system": [ 0, 2, 3, 4, 6, 10 ],
		"category": "Diagnostic/Pathological",
		"definition": "pain"
	},
	{
		"term": "-eal",
		"system": [ 0, 4, 11 ],
		"category": "Adjective, Noun, and Diminuative",
		"definition": "pertaining to"
	},
	{
		"term": "-ectasis",
		"system": [ 0, 3, 4, 7 ],
		"category": "Diagnostic/Pathological",
		"definition": "dilation or expansion"
	},
	{
		"term": "-ectomy",
		"system": [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ],
		"category": "Surgical",
		"definition": "surgical removal, excision"
	},
	{
		"term": "-edema",
		"system": [ 0, 3, 5, 9 ],
		"category": "Diagnostic/Pathological",
		"definition": "swelling"
	},
	{
		"term": "-emesis",
		"system": [ 0, 2 ],
		"category": "Diagnostic/Pathological",
		"definition": "vomit"
	},
	{
		"term": "-emia",
		"system": [ 0, 3, 4, 5, 7, 9 ],
		"category": "Diagnostic/Pathological",
		"definition": "blood condition"
	},
	{
		"term": "-esis",
		"system": [ 0, 1, 9 ],
		"category": "Adjective, Noun, and Diminuative",
		"definition": "condition"
	},
	{
		"term": "-esthesia",
		"system": [ 0 ],
		"category": "",
		"definition": "feeling"
	},
	{
		"term": "-ferent",
		"system": [ 0, 10 ],
		"category": "",
		"definition": "to carry"
	},
	{
		"term": "-gen",
		"system": [ 0, 4, 5, 8, 9 ],
		"category": "Diagnostic/Pathological",
		"definition": "forming, producing, origin"
	},
	{
		"term": "-genesis",
		"system": [ 0, 4, 6, 7, 8, 9, 12 ],
		"category": "Diagnostic/Pathological",
		"definition": "forming, producing, origin"
	},
	{
		"term": "-glia",
		"system": [ 0, 10 ],
		"category": "",
		"definition": "glue, neuroglial tissue"
	},
	{
		"term": "-globin",
		"system": [ 0, 5 ],
		"category": "",
		"definition": "protein"
	},
	{
		"term": "-gnosis",
		"system": [ 0, 12 ],
		"category": "",
		"definition": "knowing"
	},
	{
		"term": "-grade",
		"system": [ 0 ],
		"category": "",
		"definition": "to go"
	},
	{
		"term": "-graft",
		"system": [ 0, 1, 5 ],
		"category": "",
		"definition": "transplantation"
	},
	{
		"term": "-gram",
		"system": [ 0, 3, 4, 7, 8, 12 ],
		"category": "Diagnostic/Pathological",
		"definition": "record, writing"
	},
	{
		"term": "-graph",
		"system": [ 0, 3, 4, 10, 11, 12 ],
		"category": "Diagnostic/Pathological",
		"definition": "instrument for recording"
	},
	{
		"term": "-graphy",
		"system": [ 0, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
		"category": "Diagnostic/Pathological",
		"definition": "process of recording"
	},
	{
		"term": "-gravida",
		"system": [ 0, 8 ],
		"category": "",
		"definition": "pregnant woman"
	},
	{
		"term": "-ia",
		"system": [ 0, 3, 4, 6, 8, 10 ],
		"category": "Adjective, Noun, and Diminuative",
		"definition": "condition, state"
	},
	{
		"term": "-iac",
		"system": [ 0 ],
		"category": "",
		"definition": "pertaining to"
	},
	{
		"term": "-iasis",
		"system": [ 0, 2, 7, 8 ],
		"category": "Diagnostic/Pathological",
		"definition": "abnormal condition (produced by something specified)"
	},
	{
		"term": "-iatry",
		"system": [ 0, 10 ],
		"category": "Adjective, Noun, and Diminuative",
		"definition": "medicine, treatment"
	},
	{
		"term": "-ic",
		"system": [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
		"category": "Adjective, Noun, and Diminuative",
		"definition": "pertaining to"
	},
	{
		"term": "-ical",
		"system": [ 0 ],
		"category": "Adjective, Noun, and Diminuative",
		"definition": "pertaining to"
	},
	{
		"term": "-ice",
		"system": [ 0 ],
		"category": "",
		"definition": "noun ending"
	},
	{
		"term": "-ician",
		"system": [ 0 ],
		"category": "Adjective, Noun, and Diminuative",
		"definition": "specialist"
	},
	{
		"term": "-icle",
		"system": [ 0 ],
		"category": "Adjective, Noun, and Diminuative",
		"definition": "small, minute"
	},
	{
		"term": "-icterus",
		"system": [ 0 ],
		"category": "",
		"definition": "jaundice"
	},
	{
		"term": "-ile",
		"system": [ 0 ],
		"category": "Adjective, Noun, and Diminuative",
		"definition": "pertaining to"
	},
	{
		"term": "-ine",
		"system": [ 0, 10 ],
		"category": "",
		"definition": "pertaining to"
	},
	{
		"term": "-ion",
		"system": [ 0, 5, 6 ],
		"category": "",
		"definition": "the act of, action, condition"
	},
	{
		"term": "-ior",
		"system": [ 0 ],
		"category": "Adjective, Noun, and Diminuative",
		"definition": "pertaining to"
	},
	{
		"term": "-is",
		"system": [ 0 ],
		"category": "",
		"definition": "noun ending"
	},
	{
		"term": "-ism",
		"system": [ 0, 1, 2, 3, 4, 6, 8, 9 ],
		"category": "Adjective, Noun, and Diminuative",
		"definition": "condition"
	},
	{
		"term": "-ist",
		"system": [ 0, 2, 3, 11 ],
		"category": "Adjective, Noun, and Diminuative",
		"definition": "specialist"
	},
	{
		"term": "-isy",
		"system": [ 0, 3 ],
		"category": "",
		"definition": "state of; condition"
	},
	{
		"term": "-itic",
		"system": [ 0 ],
		"category": "",
		"definition": "pertaining to"
	},
	{
		"term": "-itis",
		"system": [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ],
		"category": "Diagnostic/Pathological",
		"definition": "inflammation"
	},
	{
		"term": "-ive",
		"system": [ 0, 3 ],
		"category": "",
		"definition": "pertaining to"
	},
	{
		"term": "-ization",
		"system": [ 0 ],
		"category": "",
		"definition": "process (of)"
	},
	{
		"term": "-kinesia",
		"system": [ 0, 6, 10 ],
		"category": "",
		"definition": "movement"
	},
	{
		"term": "-lalia",
		"system": [ 0 ],
		"category": "",
		"definition": "speech, babble"
	},
	{
		"term": "-lepsy",
		"system": [ 0, 10 ],
		"category": "",
		"definition": "seizure"
	},
	{
		"term": "-listhesis",
		"system": [ 0, 6 ],
		"category": "",
		"definition": "slipping"
	},
	{
		"term": "-lith",
		"system": [ 0, 2, 7, 8 ],
		"category": "Diagnostic/Pathological",
		"definition": "stone, calculus"
	},
	{
		"term": "-logist",
		"system": [ 0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12 ],
		"category": "",
		"definition": "specialist in the study of"
	},
	{
		"term": "-logy",
		"system": [ 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 12 ],
		"category": "",
		"definition": "study of"
	},
	{
		"term": "-lucent",
		"system": [ 0 ],
		"category": "",
		"definition": "to shine, clear, to shine through"
	},
	{
		"term": "-lysis",
		"system": [ 0, 1, 2, 4, 5, 7, 9, 10 ],
		"category": "Surgical",
		"definition": "destruction, separation, loosening"
	},
	{
		"term": "-malacia",
		"system": [ 0, 1, 4, 6, 10, 11 ],
		"category": "Diagnostic/Pathological",
		"definition": "abnormal softening"
	},
	{
		"term": "-mania",
		"system": [ 0 ],
		"category": "",
		"definition": "frenzy, state of mental disorder"
	},
	{
		"term": "-megaly",
		"system": [ 0, 2, 4, 5, 8, 9 ],
		"category": "Diagnostic/Pathological",
		"definition": "enlargement, large"
	},
	{
		"term": "-meter",
		"system": [ 0, 3, 4, 6, 7, 10, 11, 12 ],
		"category": "Diagnostic/Pathological",
		"definition": "instruments for measuring"
	},
	{
		"term": "-metry",
		"system": [ 0, 3, 4, 7, 8, 9, 11, 12 ],
		"category": "Diagnostic/Pathological",
		"definition": "act of measuring"
	},
	{
		"term": "-oid",
		"system": [ 0, 1, 4, 5, 6, 7, 8, 9 ],
		"category": "",
		"definition": "resembling"
	},
	{
		"term": "-ole",
		"system": [ 0, 2, 3, 4 ],
		"category": "Adjective, Noun, and Diminuative",
		"definition": "small"
	},
	{
		"term": "-oma",
		"system": [ 0, 1, 2, 4, 5, 6, 8, 9, 10, 11 ],
		"category": "Diagnostic/Pathological",
		"definition": "tumor, neoplam"
	},
	{
		"term": "-opaque",
		"system": [ 0 ],
		"category": "",
		"definition": "nontransparent, obscure"
	},
	{
		"term": "-opia",
		"system": [ 0, 11 ],
		"category": "",
		"definition": "vision"
	},
	{
		"term": "-opsia",
		"system": [ 0, 11 ],
		"category": "",
		"definition": "vision"
	},
	{
		"term": "-opsy",
		"system": [ 0, 1 ],
		"category": "",
		"definition": "view of"
	},
	{
		"term": "-orexia",
		"system": [ 0, 2 ],
		"category": "",
		"definition": "appetite"
	},
	{
		"term": "-ory",
		"system": [ 0 ],
		"category": "",
		"definition": "pertaining to"
	},
	{
		"term": "-ose",
		"system": [ 0, 4 ],
		"category": "",
		"definition": "pertaining to, sugar"
	},
	{
		"term": "-osis",
		"system": [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ],
		"category": "Diagnostic/Pathological",
		"definition": "abnormal condition, increase (used primarily with blood cells)"
	},
	{
		"term": "-osmia",
		"system": [ 0, 3 ],
		"category": "",
		"definition": "smell"
	},
	{
		"term": "-ous",
		"system": [ 0, 1, 4, 5, 11 ],
		"category": "Adjective, Noun, and Diminuative",
		"definition": "pertaining to"
	},
	{
		"term": "-oxia",
		"system": [ 0, 3 ],
		"category": "",
		"definition": "oxygen"
	},
	{
		"term": "-para",
		"system": [ 0, 8 ],
		"category": "",
		"definition": "to bear (offspring)"
	},
	{
		"term": "-paresis",
		"system": [ 0, 10 ],
		"category": "",
		"definition": "partial paralysis"
	},
	{
		"term": "-partum",
		"system": [ 0 ],
		"category": "",
		"definition": "childbirth"
	},
	{
		"term": "-pathy",
		"system": [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
		"category": "Diagnostic/Pathological",
		"definition": "disease"
	},
	{
		"term": "-penia",
		"system": [ 0, 5 ],
		"category": "Diagnostic/Pathological",
		"definition": "decrease, deficiency, too few"
	},
	{
		"term": "-pepsia",
		"system": [ 0, 2 ],
		"category": "",
		"definition": "digestion"
	},
	{
		"term": "-pexy",
		"system": [ 0, 2, 5, 7, 8 ],
		"category": "Surgical",
		"definition": "surgical fixation"
	},
	{
		"term": "-phage",
		"system": [ 0, 5 ],
		"category": "",
		"definition": "swallowing, eating"
	},
	{
		"term": "-phagia",
		"system": [ 0, 2, 5 ],
		"category": "Diagnostic/Pathological",
		"definition": "swallowing, eating"
	},
	{
		"term": "-phasia",
		"system": [ 0, 10 ],
		"category": "Diagnostic/Pathological",
		"definition": "speech"
	},
	{
		"term": "-phil",
		"system": [ 0, 5 ],
		"category": "",
		"definition": "attraction for"
	},
	{
		"term": "-philia",
		"system": [ 0, 5 ],
		"category": "",
		"definition": "attraction for"
	},
	{
		"term": "-phobia",
		"system": [ 0, 5, 11 ],
		"category": "Diagnostic/Pathological",
		"definition": "fear"
	},
	{
		"term": "-phonia",
		"system": [ 0, 3 ],
		"category": "",
		"definition": "voice"
	},
	{
		"term": "-phoresis",
		"system": [ 0, 5 ],
		"category": "",
		"definition": "carrying, transmission"
	},
	{
		"term": "-phoria",
		"system": [ 0 ],
		"category": "",
		"definition": "feeling (mental state)"
	},
	{
		"term": "-phylaxis",
		"system": [ 0, 5 ],
		"category": "",
		"definition": "protection"
	},
	{
		"term": "-physis",
		"system": [ 0, 6 ],
		"category": "",
		"definition": "growth"
	},
	{
		"term": "-plakia",
		"system": [ 0 ],
		"category": "",
		"definition": "plaque"
	},
	{
		"term": "-plasia",
		"system": [ 0, 7 ],
		"category": "Diagnostic/Pathological",
		"definition": "development, growth, formation"
	},
	{
		"term": "-plasm",
		"system": [ 0 ],
		"category": "Diagnostic/Pathological",
		"definition": "formation, development, growth"
	},
	{
		"term": "-plasty",
		"system": [ 0, 1, 2, 3, 4, 6, 7, 8, 10, 11 ],
		"category": "Surgical",
		"definition": "surgical repair"
	},
	{
		"term": "-plegia",
		"system": [ 0, 2, 3, 7, 10, 11 ],
		"category": "Diagnostic/Pathological",
		"definition": "paralysis"
	},
	{
		"term": "-plexy",
		"system": [ 0 ],
		"category": "",
		"definition": "stroke"
	},
	{
		"term": "-pnea",
		"system": [ 0, 3 ],
		"category": "",
		"definition": "breathing"
	},
	{
		"term": "-poiesis",
		"system": [ 0, 5, 7, 8 ],
		"category": "",
		"definition": "formation"
	},
	{
		"term": "-porosis",
		"system": [ 0, 6 ],
		"category": "",
		"definition": "porous"
	},
	{
		"term": "-tone",
		"system": [ 0, 6 ],
		"category": "",
		"definition": "tone"
	},
	{
		"term": "-potence",
		"system": [ 0 ],
		"category": "",
		"definition": "power"
	},
	{
		"term": "-prandial",
		"system": [ 0, 2, 8, 9 ],
		"category": "",
		"definition": "pertaining to a meal"
	},
	{
		"term": "-ptosis",
		"system": [ 0, 2, 7, 8, 11 ],
		"category": "Diagnostic/Pathological",
		"definition": "drooping, prolapse, downward placement"
	},
	{
		"term": "-ptysis",
		"system": [ 0, 3 ],
		"category": "",
		"definition": "spitting"
	},
	{
		"term": "-rrhage",
		"system": [ 0 ],
		"category": "Diagnostic/Pathological",
		"definition": "bursting forth (of), abnormal excessive fluid discharge"
	},
	{
		"term": "-rrhagia",
		"system": [ 0, 5, 8 ],
		"category": "Diagnostic/Pathological",
		"definition": "bursting forth (of), condition of abnormal excessive fluid discharge"
	},
	{
		"term": "-rrhaphy",
		"system": [ 0, 2, 4, 7, 8, 10 ],
		"category": "Surgical",
		"definition": "suture"
	},
	{
		"term": "-rrhea",
		"system": [ 0, 1, 3, 7, 8, 11 ],
		"category": "Diagnostic/Pathological",
		"definition": "discharge, flow"
	},
	{
		"term": "-rrhexis",
		"system": [ 0, 4, 6, 8 ],
		"category": "Diagnostic/Pathological",
		"definition": "rupture"
	},
	{
		"term": "-salpinx",
		"system": [ 0, 8 ],
		"category": "",
		"definition": "tube (usually the fallopian or eustachian(auditory) tube)"
	},
	{
		"term": "-sarcoma",
		"system": [ 0, 6 ],
		"category": "",
		"definition": "malignant tumor of connective tissue"
	},
	{
		"term": "-schisis",
		"system": [ 0, 2 ],
		"category": "",
		"definition": "splitting"
	},
	{
		"term": "-scope",
		"system": [ 0, 2, 3, 7 ],
		"category": "Diagnostic/Pathological",
		"definition": "instrument for viewing"
	},
	{
		"term": "-scopy",
		"system": [ 0, 2, 3, 6, 8, 11 ],
		"category": "Diagnostic/Pathological",
		"definition": "visual examination"
	},
	{
		"term": "-sis",
		"system": [ 0 ],
		"category": "",
		"definition": "state of; condition"
	},
	{
		"term": "-social",
		"system": [ 0 ],
		"category": "",
		"definition": "society"
	},
	{
		"term": "-spadias",
		"system": [ 0, 8 ],
		"category": "",
		"definition": "slit, fissure"
	},
	{
		"term": "-spasm",
		"system": [ 0, 2, 3, 4, 6, 10 ],
		"category": "Diagnostic/Pathological",
		"definition": "involuntary contraction, twitching"
	},
	{
		"term": "-sphyxia",
		"system": [ 0 ],
		"category": "",
		"definition": "pulse"
	},
	{
		"term": "-stasis",
		"system": [ 0, 4, 5, 9 ],
		"category": "",
		"definition": "standing still, maintenance of a constant level"
	},
	{
		"term": "-stenosis",
		"system": [ 0, 2, 3, 4, 7 ],
		"category": "Diagnostic/Pathological",
		"definition": "narrowing, stricture"
	},
	{
		"term": "-stomy",
		"system": [ 0, 2, 3, 4, 7, 10, 11 ],
		"category": "",
		"definition": "forming an opening (mouth)"
	},
	{
		"term": "-taxia",
		"system": [ 0, 10 ],
		"category": "",
		"definition": "order, coordination, muscle coordination"
	},
	{
		"term": "-tension",
		"system": [ 0, 4 ],
		"category": "",
		"definition": "to stretch, pressure"
	},
	{
		"term": "-therapy",
		"system": [ 0, 1, 3, 4, 5, 8, 9, 10 ],
		"category": "",
		"definition": "treatment"
	},
	{
		"term": "-thorax",
		"system": [ 0, 3 ],
		"category": "",
		"definition": "chest"
	},
	{
		"term": "-thymia",
		"system": [ 0 ],
		"category": "",
		"definition": "mind; emotion"
	},
	{
		"term": "-tic",
		"system": [ 0, 4, 5, 10 ],
		"category": "Adjective, Noun, and Diminuative",
		"definition": "pertaining to"
	},
	{
		"term": "-tocia",
		"system": [ 0, 8 ],
		"category": "",
		"definition": "labor, childbirth"
	},
	{
		"term": "-tome",
		"system": [ 0, 1, 6, 7 ],
		"category": "Surgical",
		"definition": "instrument used to cut"
	},
	{
		"term": "-tomy",
		"system": [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ],
		"category": "Surgical",
		"definition": "incision"
	},
	{
		"term": "-toxic",
		"system": [ 0, 4 ],
		"category": "Diagnostic/Pathological",
		"definition": "pertaining to poison"
	},
	{
		"term": "-tripsy",
		"system": [ 0, 2, 7, 10 ],
		"category": "Surgical",
		"definition": "surgical crushing"
	},
	{
		"term": "-trophy",
		"system": [ 0, 6 ],
		"category": "",
		"definition": "nourishment, development"
	},
	{
		"term": "-tropia",
		"system": [ 0, 11 ],
		"category": "",
		"definition": "turning"
	},
	{
		"term": "-tropin",
		"system": [ 0, 8, 9 ],
		"category": "",
		"definition": "to stimulate"
	},
	{
		"term": "-ula",
		"system": [ 0 ],
		"category": "",
		"definition": "small, minute"
	},
	{
		"term": "-ule",
		"system": [ 0, 4 ],
		"category": "Adjective, Noun, and Diminuative",
		"definition": "small, minute"
	},
	{
		"term": "-um",
		"system": [ 0, 2, 3, 4, 8 ],
		"category": "",
		"definition": "structure, thing"
	},
	{
		"term": "-uria",
		"system": [ 0, 7, 9 ],
		"category": "",
		"definition": "urine"
	},
	{
		"term": "-us",
		"system": [ 0, 4, 5 ],
		"category": "",
		"definition": "condition; structure"
	},
	{
		"term": "-version",
		"system": [ 0, 4, 8 ],
		"category": "",
		"definition": "turning"
	},
	{
		"term": "-y",
		"system": [ 0, 4 ],
		"category": "Adjective, Noun, and Diminuative",
		"definition": "condition; process"
	},
	{
		"term": "-istry",
		"system": [ 0, 2 ],
		"category": "",
		"definition": "specialty of"
	},
	{
		"term": "-lithiasis",
		"system": [ 0, 2, 7 ],
		"category": "",
		"definition": "condition of stones"
	},
	{
		"term": "-manometer",
		"system": [ 0, 4 ],
		"category": "",
		"definition": "instrument to measure pressure"
	},
	{
		"term": "-tonic",
		"system": [ 0, 4, 6 ],
		"category": "",
		"definition": "pertaining to tone"
	},
	{
		"term": "-apheresis",
		"system": [ 0, 5 ],
		"category": "",
		"definition": "removal, carry away"
	},
	{
		"term": "-crit",
		"system": [ 0, 5 ],
		"category": "",
		"definition": "separation of"
	},
	{
		"term": "-cytosis",
		"system": [ 0, 5 ],
		"category": "",
		"definition": "more than the normal number of cells"
	},
	{
		"term": "-globulin",
		"system": [ 0, 5 ],
		"category": "",
		"definition": "protein"
	},
	{
		"term": "-spermia",
		"system": [ 0, 8 ],
		"category": "",
		"definition": "condition of sperm"
	},
	{
		"term": "-pressin",
		"system": [ 0, 8, 9 ],
		"category": "",
		"definition": "to press down"
	},
	{
		"term": "-trophic",
		"system": [ 0, 10 ],
		"category": "",
		"definition": "pertaining to nutrition"
	},
	{
		"term": "-surgery",
		"system": [ 0, 10 ],
		"category": "",
		"definition": "surgery"
	},
	{
		"term": "-le",
		"system": [ 0 ],
		"category": "",
		"definition": "noun, verb, or adjective suffix"
	},
	{
		"term": "-eous",
		"system": [ 0, 4, 5 ],
		"category": "",
		"definition": "composed of, like, resembling, of the nature of"
	},
	{
		"term": "-cure",
		"system": [ 0 ],
		"category": "",
		"definition": "to care for"
	},
	{
		"term": "-tonia",
		"system": [ 0, 6, 11 ],
		"category": "",
		"definition": "tone, degree of muscle tension"
	},
	{
		"term": "-os",
		"system": [ 0, 9 ],
		"category": "",
		"definition": "pertaining to"
	},
	{
		"term": "-sclerosis",
		"system": [ 0, 4, 7 ],
		"category": "",
		"definition": "abnormal condition of hardening"
	},
	{
		"term": "-drome",
		"system": [ 0, 9 ],
		"category": "",
		"definition": "to run, running"
	},
	{
		"term": "-ectasia",
		"system": [ 0, 4 ],
		"category": "",
		"definition": "dilation, expansion"
	},
	{
		"term": "-lytic",
		"system": [ 0, 9 ],
		"category": "",
		"definition": "to reduce, destroy"
	}
];
	