import styles from "./logo.module.css";

export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 133"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M46.7905 54.7374C46.5051 54.9294 46.1171 54.8547 45.9251 54.5694C45.7318 54.284 45.8078 53.896 46.0931 53.704C48.0345 52.3907 49.6385 50.6134 50.7452 48.5307C51.8105 46.5267 52.4145 44.2374 52.4145 41.8067C52.4145 37.844 50.8065 34.256 48.2105 31.6587C45.6132 29.0627 42.0252 27.4547 38.0625 27.4547C34.0998 27.4547 30.5105 29.0627 27.9145 31.6587C25.3172 34.256 23.7105 37.844 23.7105 41.8067C23.7105 43.272 23.9278 44.6827 24.3318 46.004C24.7492 47.3734 25.3691 48.6587 26.1571 49.8254L51.6398 87.5987C52.2865 88.556 52.7972 89.62 53.1452 90.7574C53.4812 91.8587 53.6612 93.0214 53.6612 94.2214C53.6612 97.4947 52.3345 100.459 50.1891 102.604C48.0451 104.749 45.0798 106.076 41.8065 106.076C38.5332 106.076 35.5691 104.749 33.4225 102.604C31.2771 100.459 29.9505 97.4947 29.9505 94.2214C29.9505 92.2134 30.4505 90.3214 31.3318 88.6627C32.2452 86.944 33.5718 85.476 35.1785 84.3907C35.4625 84.1987 35.8505 84.2747 36.0425 84.56C36.2358 84.8454 36.1598 85.232 35.8745 85.424C34.4385 86.3947 33.2518 87.7094 32.4332 89.2481C31.6452 90.7307 31.1985 92.424 31.1985 94.2214C31.1985 97.1507 32.3852 99.8027 34.3052 101.721C36.2252 103.641 38.8772 104.829 41.8065 104.829C44.7358 104.829 47.3878 103.641 49.3065 101.721C51.2265 99.8027 52.4145 97.1507 52.4145 94.2214C52.4145 93.136 52.2531 92.0947 51.9558 91.1187C51.6478 90.1094 51.1892 89.1587 50.6065 88.296L25.1238 50.5214C24.2718 49.26 23.5985 47.8614 23.1425 46.3654C22.6998 44.9187 22.4625 43.388 22.4625 41.8067C22.4625 37.4987 24.2092 33.5987 27.0318 30.776C29.8545 27.9534 33.7545 26.208 38.0625 26.208C42.3705 26.208 46.2705 27.9534 49.0931 30.776C51.9145 33.5987 53.6612 37.4987 53.6612 41.8067C53.6612 44.4467 53.0052 46.9361 51.8465 49.1161C50.6452 51.3774 48.9011 53.3094 46.7905 54.7374V54.7374ZM16.2238 109.196C16.2238 109.541 15.9438 109.82 15.5998 109.82C15.2545 109.82 14.9758 109.541 14.9758 109.196V18.7187H38.0625C44.4372 18.7187 50.2091 21.3041 54.3878 25.4814C58.5651 29.6601 61.1492 35.4307 61.1492 41.8067C61.1492 47.1187 59.3532 52.0147 56.3332 55.9187C53.4225 59.6827 49.3732 62.5227 44.7012 63.9227L57.8518 83.4174C58.9091 84.9841 59.7425 86.7174 60.3078 88.5707C60.8545 90.3627 61.1492 92.2614 61.1492 94.2214C61.1492 99.5627 58.9838 104.399 55.4838 107.899C51.9838 111.399 47.1478 113.564 41.8065 113.564C36.4652 113.564 31.6278 111.399 28.1278 107.899C24.6278 104.399 22.4625 99.5627 22.4625 94.2214C22.4625 90.9467 23.2772 87.8627 24.7132 85.1587C26.2025 82.3547 28.3638 79.96 30.9825 78.188C31.2665 77.996 31.6545 78.072 31.8478 78.3574C32.0385 78.6427 31.9638 79.0294 31.6785 79.2214C29.2305 80.8787 27.2092 83.1187 25.8145 85.7427C24.4718 88.2721 23.7105 91.1574 23.7105 94.2214C23.7105 99.2174 25.7358 103.741 29.0105 107.016C32.2852 110.291 36.8092 112.317 41.8065 112.317C46.8025 112.317 51.3265 110.291 54.6012 107.016C57.8758 103.741 59.9012 99.2174 59.9012 94.2214C59.9012 92.376 59.6278 90.6 59.1185 88.932C58.5931 87.2054 57.8118 85.5854 56.8185 84.1147L31.3372 46.3414C30.8945 45.688 30.5438 44.9601 30.3052 44.1787C30.0758 43.4241 29.9505 42.6267 29.9505 41.8067C29.9505 39.5667 30.8585 37.5387 32.3265 36.0707C33.7945 34.6027 35.8225 33.696 38.0625 33.696C40.3025 33.696 42.3305 34.6027 43.7985 36.0707C45.2665 37.5387 46.1745 39.5667 46.1745 41.8067C46.1745 43.1787 45.8332 44.472 45.2305 45.6054C44.6078 46.7787 43.7025 47.7814 42.6038 48.5267C42.3198 48.7174 41.9332 48.644 41.7398 48.36C41.5492 48.076 41.6225 47.6894 41.9065 47.4974C42.8332 46.8707 43.5998 46.0187 44.1292 45.0214C44.6372 44.0627 44.9265 42.9694 44.9265 41.8067C44.9265 39.912 44.1572 38.196 42.9158 36.9534C41.6732 35.712 39.9572 34.9427 38.0625 34.9427C36.1665 34.9427 34.4505 35.712 33.2092 36.9534C31.9665 38.196 31.1985 39.912 31.1985 41.8067C31.1985 42.512 31.3025 43.1881 31.4945 43.8174C31.6945 44.4707 31.9918 45.0854 32.3705 45.6454L43.9705 62.84C48.5478 61.5574 52.5172 58.8187 55.3492 55.1574C58.2025 51.468 59.9012 46.836 59.9012 41.8067C59.9012 35.776 57.4572 30.316 53.5052 26.364C49.5532 22.412 44.0932 19.9667 38.0625 19.9667H16.2238V109.196Z" />
      <path d="M69.4413 72.6747C71.572 75.7707 73.2547 79.196 74.3987 82.8573C75.52 86.448 76.1253 90.2653 76.1253 94.2213C76.1253 104.731 71.864 114.248 64.976 121.136C58.0893 128.023 48.572 132.284 38.0627 132.284C27.552 132.284 18.036 128.023 11.148 121.136C4.26001 114.248 0 104.731 0 94.2213V38.0626C0 27.552 4.26001 18.036 11.148 11.148C18.036 4.26133 27.552 -1.24603e-05 38.0627 -1.24603e-05C48.572 -1.24603e-05 58.0893 4.26133 64.976 11.148C71.864 18.036 76.1253 27.552 76.1253 38.0626V47.7333L78.416 50.1533C78.8734 50.6333 79.24 51.2026 79.4907 51.8306C79.732 52.4333 79.8653 53.0933 79.8667 53.7827C79.8667 54.4747 79.7373 55.1333 79.5 55.7347C79.2533 56.36 78.888 56.9293 78.432 57.4147L75.5267 60.508L72.6507 57.352C72.2173 56.8773 71.868 56.3187 71.628 55.7027C71.3987 55.1133 71.272 54.4693 71.272 53.796C71.2707 53.1266 71.3947 52.484 71.6213 51.892C71.8573 51.2773 72.2053 50.7173 72.6387 50.2387L74.876 47.764V38.0626C74.876 27.8973 70.756 18.6933 64.0947 12.0307C57.432 5.36932 48.228 1.248 38.0627 1.248C27.896 1.248 18.6933 5.36932 12.0307 12.0307C5.368 18.6933 1.24801 27.8973 1.24801 38.0626V94.2213C1.24801 104.387 5.368 113.591 12.0307 120.252C18.6933 126.915 27.896 131.036 38.0627 131.036C48.228 131.036 57.432 126.915 64.0947 120.252C70.756 113.591 74.876 104.387 74.876 94.2213C74.876 90.3906 74.292 86.6973 73.2093 83.228C72.12 79.7426 70.5267 76.4786 68.516 73.5253L65.24 73.5906C64.5707 73.604 63.8973 73.492 63.26 73.2533C62.6453 73.024 62.0613 72.6747 61.5453 72.208C61.0293 71.7413 60.6253 71.1947 60.336 70.604C60.0333 69.9907 59.8547 69.3307 59.8027 68.6667L59.4667 64.396L63.7787 64.3906C64.4307 64.3906 65.084 64.508 65.7053 64.748C66.3027 64.976 66.8693 65.3187 67.372 65.7747C67.876 66.232 68.2733 66.7613 68.56 67.332C68.8587 67.924 69.04 68.5653 69.1053 69.2187L69.4413 72.6747ZM68.1547 72.2893L67.8667 69.3347C67.8187 68.8387 67.6787 68.348 67.4494 67.892C67.2267 67.452 66.9227 67.044 66.5387 66.696C66.1533 66.348 65.7173 66.084 65.2587 65.908C64.784 65.724 64.28 65.6333 63.7787 65.6333L60.8147 65.6373L61.0467 68.5693C61.0867 69.0853 61.2227 69.592 61.452 70.0573C61.6733 70.5093 61.984 70.928 62.3787 71.2866C62.7747 71.6453 63.2227 71.912 63.6933 72.088C64.184 72.272 64.7014 72.3587 65.216 72.348L68.1547 72.2893ZM75.5227 48.9027L73.56 51.072C73.228 51.4387 72.9614 51.8667 72.7827 52.336C72.608 52.788 72.5134 53.2813 72.5147 53.796C72.5147 54.3093 72.612 54.8013 72.788 55.2533C72.9693 55.72 73.2373 56.1467 73.572 56.5147L75.5413 58.6747L77.5267 56.5613C77.872 56.1933 78.1507 55.7573 78.34 55.276C78.524 54.812 78.624 54.3067 78.624 53.7827C78.6227 53.256 78.52 52.7506 78.336 52.2893C78.1453 51.8133 77.8654 51.38 77.516 51.0107L75.5227 48.9027" />
    </svg>
  );
}
